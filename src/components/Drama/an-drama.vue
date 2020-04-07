<template>
    <div class="dramaList">
        <div class="drama_one" v-for="n in 10">
            <span class="num">1</span>
            <img class="movie" src="@/assets/test/图像 944@2x.png" alt="">
            <div class="content">
                <div class="left">
                    <p class="name">无人区（2020）</p>
                    <p class="score">6.0</p>
                    <p class="message">2020/中国大陆/冒险 奇幻 犯
                        罪/易烊千玺/大鹏/柳岩/岳…</p>
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
        name: "an-drama"
    }
</script>

<style lang="less" scoped>
    .dramaList{
        height: 100%;
        box-sizing: border-box;
        .drama_one{
            display: flex;
            justify-content: flex-start;
            box-sizing: border-box;
            align-items: center;
            margin-bottom: 15px;
            .num{
                font-size: 18px;
                color: #FF1010;
                margin-left: 18px;
                margin-right: 16px;
            }
            .movie{
                width: 62px;
                height: 82px;
                margin-right: 16px;
            }
            .content{
                display: flex;
                width: 170px;
                .left{
                    .name{
                        font-size: 16px;
                        color: #000000;
                        margin-bottom: 5px;
                    }
                    .score{
                        font-size: 10px;
                        color: #FF6201;
                        margin-bottom: 3px;
                    }
                    .message{
                        overflow : hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        width: 170px;
                    }
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    align-content: center;
                    margin-right: 25px;
                    margin-left: 36px;
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
