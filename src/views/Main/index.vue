<template>
    <div class="main">
        <router-view/>
        <van-tabbar route fixed :safe-area-inset-bottom="true" v-model="active">
            <van-tabbar-item to="/">
                <div class="icon" style="background-image: url('@/assets/icon/椭圆 200@2x.png');background-size: .6rem">
                    <img src="@/assets/icon/shouye@2x.png" alt="">
                </div>
            </van-tabbar-item>
            <van-tabbar-item to="Library">
                <div class="icon">
                    <img src="@/assets/icon/icon_home_msg(1).png" alt="">
                </div>
            </van-tabbar-item>
            <van-tabbar-item to="mine">
                <div class="icon">
                    <img src="@/assets/icon/wodenormal@2x.png" alt="">
                </div>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "index",
        data(){
            return {
                active:-1
            }
        },
        mounted(){
            this.getNavList();
        },
        methods:{
            ...mapActions({
                getNavList:'home/getNavList'
            })
        }
    }
</script>

<style lang="less" scoped>
    .main{
        height: 100%;
        .icon{
            img{
                width: 30px;
                height: 30px;
            }
        }
    }

</style>
