<template>
    <div class="home">
        <div class="search">
            <img class="avatar" src="@/assets/icon/cbf9e78548834da863f446198acceb97@2x.png" alt="">
            <div class="inputContent">
                <span>从前有座灵剑山</span>
                <img src="@/assets/icon/组 2787@2x (1).png" alt="">
                <img src="@/assets/icon/首页搜索@2x (1).png" alt="">
            </div>
        </div>
        <van-tabs
                :swipeable="true"
                title-active-color="#FEAC2D"
                title-inactive-color="#404040"
                v-model="active">
            <van-tab :title="item.name" :name="item.paramValue" v-for="(item,index) in navList" :key="index">
                <div v-if="movieList[index]" v-for="(everyOne,i) in movieList[index]" :key="everyOne.modelContentId">
                    <h1 v-if="everyOne.videoList.length > 0" class="title">{{everyOne.modelContentName}}<span>更多</span> <van-icon style="margin-right: 10px" color="#838383" name="arrow" /></h1>
                    <an-list v-if="i % 2 == 0" v-model="everyOne.videoList"/>
                    <an-movie v-if="i % 2 != 0" v-model="everyOne.videoList"/>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex';
    import AnList from "@/components/list/an-list";
    import AnMovie from "@/components/movie/an-movie";
    export default {
        name: "index",
        components: {AnMovie, AnList},
        data(){
            return {
                active:'',
                dicts:[],
            }

        },
        computed:{
            ...mapState({
                movieList:state => state.home.movieList,
                navList: state => state.home.navList
            }),
        },
        methods:{
            ...mapActions({
                getList:'home/getList',
            }),
        },
    }
</script>

<style lang="less" scoped>
.home{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #FFFFFF;
    padding-bottom: 100px;
    overflow-y: auto;
    .search{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-top: 14px;
        margin-bottom: 12px;
        height: 36px;
        .avatar{
            width:36px;
            height:36px;
            margin-left: 15px;
            margin-right: 10px;
            border-radius: 50%;
        }
        .inputContent{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width:248px;
            height:34px;
            background:rgba(255,255,255,1);
            box-shadow:1px 1px 6px rgba(0,0,0,0.16);
            opacity:1;
            border-radius:36px;
            span{
                text-indent: 12px;
            }
            img:nth-of-type(1){
                width: 2px;
                margin-left: auto;
                margin-right: 7px;
            }
            img:nth-of-type(2){
                width:24px;
                height:24px;
                margin-right: 7px;
            }
        }
    }
  /deep/  .van-tabs__line{
        background: #FEAC2D;
    }
  /deep/ .van-tab__pane{
      padding-left: 10px;
  }
    /deep/ .van-tabs__wrap{
        margin-bottom: 14px;

        width: 100%;
    }
    /deep/ .van-tabs__nav{
        width: 100%;
        display: flex;
        justify-content: flex-start;
    }
    /deep/ .van-tab{
        display: inline-block;
        flex-shrink: 0;
        padding:0 3px;
        flex:none;
        margin-right: 28px;
    }
    /deep/ .van-tab:nth-of-type(1){
        margin-left: 26px;
    }
    /deep/ .van-tabs{
        flex:1;
        display: flex;
        flex-direction: column;
    }
    /deep/ .van-tabs__content{
        flex:1;
    }
    .title{
        font-size:18px;
        font-family:PingFang SC;
        font-weight:500;
        display: flex;
        justify-content: flex-start;
        margin-left: 5px;
        span{
            margin-left: auto;
            list-style: none;
            color: #838383;
            font-size: 12px;
        }
    }
}
</style>
