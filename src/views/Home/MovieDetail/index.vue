<template>
    <div class="movieDetail" :style="{background: 'black'}">
        <an-header right-icon title="电影" :style="{background:'transparent'}">
            <img class="icon" slot="right" src="@/assets/icon/组 2622@2x.png" alt="">
        </an-header>
        <div class="Introduction" >
            <img class="left" src="@/assets/icon/图像 953@2x.png" alt="">
            <div class="info">
                <p class="name">无人区（2020）</p>
                <p class="message">2020/中国大陆/冒险 奇幻 犯罪/易
                    烊千玺/大鹏/柳岩/岳
                    2020/中国大陆/冒险 奇幻 犯罪/易
                    烊千玺/大鹏/柳岩/岳
                    2020/中国大陆/冒险 奇幻 犯罪/易
                    烊千玺/大鹏/柳岩/岳</p>

            </div>
        </div>
        <p class="tit">剧情简介</p>
        <div class="detail">
            在未来的反乌托邦国度中，囚犯们被关押在垂直堆叠的牢房里，饥肠辘辘地看着食物从上层落下，靠近顶层的人吃得饱饱的，而位于底层的人则因饥饿而变得激进。由加尔德·位于底层的人则因位于底层的人则因…
            <span style="color: #FF6201">展开</span>
        </div>
        <div class="tit">演职表</div>
        <div class="personList">
            <div class="person" v-for="n in 10">
                <img src="@/assets/test/图像 957@2x.png" alt="">
                <p class="name">加尔德·加…</p>
                <p class="workName">导演</p>
            </div>
        </div>
        <div class="tit">预告片</div>
        <div class="videoBox">

        </div>
    </div>
</template>

<script>
    import AnHeader from "@/components/header/an-header";
    export default {
        name: "movieDetail",
        components: {AnHeader}
    }
</script>

<style lang="less" scoped>
    /deep/ .van-nav-bar__title{
        color: #FFFFFF!important;
    }
    .icon{
        width: 24px;
    }
.movieDetail{
    height: 100%;
    .Introduction{
        display: flex;
        padding-left: 17px;
        padding-right: 37px;
        box-sizing: border-box;
        img{
            width: 115px;
            height: 154px;
            margin-right: 11px;
        }
        .info{
            width: 194px;
            .name{
                font-size: 18px;
                color: #FFFFFF;
                margin-bottom: 2px;
            }
            .message{
                width:187px;
                height:34px;
                font-size:12px;
                font-family:PingFang SC;
                font-weight:500;
                line-height:17px;
                color:rgba(255,255,255,1);
                overflow : hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-bottom: 8px;
            }


        }
    }
    .tit{
        font-size: 16px;
        color: #FFFFFF;
        margin-left: 18px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .detail{
        margin-left: 18px;
        margin-right: 18px;
        font-size: 14px;
        color: #FFFFFF;
    }
    .personList{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow-x: auto;
        .person{
            flex-shrink: 0;
            padding-left: 18px;
            img{
                width: 67px;
                height: 86px;
                margin-bottom: 5px;
            }
            .name{
                font-size: 12px;
                color: #FFFFFF;
            }
            .workName{
                font-size: 10px;
                color: #DED7CB;
                width:63px;
                display: inline-block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    .videoBox{
        width:339px;
        height:154px;
        background:rgba(0,0,0,1);
        box-shadow:1px 1px 6px rgba(0,0,0,0.16);
        opacity:0.32;
        border-radius:4px;
        margin:0 auto 20px auto;
    }
}
</style>
