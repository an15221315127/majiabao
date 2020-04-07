<template>
    <van-nav-bar
            :title="title"
            :left-text="leftText"
            :right-text="rightText"
            left-arrow
            :border="false"
            @click-left="back"
            :style="styles"
            @click-right="rightEvent"
    >
        <div class="box" slot="left">
            <van-icon color="black" size="16" name="arrow-left" />
        </div>
        <div v-if="rightIcon" class="box" slot="right">
            <slot name="right"></slot>
        </div>
    </van-nav-bar>
</template>

<script>
    export default {
        name: "an-header",
        props:{
            title:{
                type:String,
                default:''
            },
            rightEvent:{
                type:Function,
                default:()=>{}
            },
            leftText:{
                type:String,
                default:''
            },
            rightText:{
                type:String,
                default:''
            },
            rightIcon:{
                type:Boolean,
                default:false
            },
            styles:{
                type:Object,
            }
        },
        methods:{
            back(){
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
/deep/ .van-nav-bar__title{
        color: black;
}
.box{
    width:35px;
    height:35px;
    background:rgba(255,255,255,1);
    box-shadow:1px 1px 3px rgba(0,0,0,0.16);
    border-radius:50%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}
</style>
