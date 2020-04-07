<template>
    <div class="movieList">
        <div class="movieOne" @click="goDetail(item.vid)" v-for="item in list">
            <img class="pic" :src="item.posterImg" alt="">
            <p class="name">{{item.title}}</p>
            <p class="score">{{item.score}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "an-list",
        data(){
            return {
            }
        },
        props:['list'],
        model:{
            prop:'list',
            event:'changeList'
        },
        methods:{
            goDetail(id){
                console.log(id)
                this.$router.push({
                    path:'/moviedetail',
                    query:{id}
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .movieList{
        flex:1;
        display: flex;
        justify-content: flex-start;
        flex-shrink: 0;
        flex-wrap: wrap;
        background: #FFFFFF;
        .movieOne{
            width:115px;
            margin-right: 5px;
            margin-bottom: 18px;
            .pic{
                width: 115px;
                height: 154px;
                margin-bottom: 8px;
            }
            .name{
                font-size: 14px;
                color: #2C2C2C;
                width:100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .score{
                font-size: 10px;
                color: #FF6201;
            }
        }
    }
</style>
