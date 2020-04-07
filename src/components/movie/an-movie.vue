<template>
   <div class="list">
       <div v-for="item in list" class="movie">
           <div class="pic">
               <img :src="item.posterImg" alt="">
               <img :src="item.posterImg" alt="">
           </div>
           <h1 class="name">{{item.title}}</h1>
           <div class="bottomBox">
               <div class="left">
                   <div class="score">
                      {{item.score}}
                   </div>
                   <p class="message">2020/中国大陆/冒险 奇幻 犯罪/易烊千
                       玺/大鹏/柳岩/岳云鹏</p>
               </div>
               <div class="right">
                   <div class="icon">
                       <img src="@/assets/icon/xihuan_2@2x (1).png" alt="">
                   </div>
                   <span class="want">想看</span>
               </div>
           </div>
       </div>
   </div>
</template>

<script>
    export default {
        name: "an-movie",
        props:['list'],
        model:{
            prop:'list',
            event:'changeList'
        }
    }
</script>

<style lang="less" scoped>
    .list{
        .movie{
            margin-bottom: 20px;
            .pic{
                display: flex;
                justify-content: flex-start;
                img:nth-of-type(1){
                    width: 122px;
                    height: 145px;
                    margin-right: 8px;
                }
                img:nth-of-type(2){
                    width: 225px;
                    height: 145px;
                }
                margin-bottom: 9px;
            }
            .name{
                font-size: 20px;
                color: #2C2C2C;
                margin-bottom: 2px;
            }
            .bottomBox{
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                box-sizing: border-box;
                .left{
                    .score{
                        font-size: 10px;
                        color: #FF6201;
                    }
                    .message{
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        width: 228px;
                    }
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                    margin-right: 25px;
                    .icon{
                        width:27px;
                        height:27px;
                        background:rgba(255,255,255,1);
                        box-shadow:1px 1px 3px rgba(0,0,0,0.16);
                        border-radius:50%;
                        opacity:1;
                        margin-bottom: 1px;
                        img{
                            width: 18px;
                            height: 14px;
                            margin-top: 7px;
                            margin-left: 5px;
                        }
                    }
                    .want{
                        color: #FEAC2D;
                        font-size: 12px;
                    }
                }
            }


        }
    }

</style>
