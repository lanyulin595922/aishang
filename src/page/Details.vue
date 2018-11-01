<template>
    <div i="details" style="font-size: 1rem;">
		<div class="recommend" v-if="false">
            <div class="recommend-img">
                <img src="/static/ms.jpg" alt="">
            </div>
            <div class="recommend-content">
                <div class="content-title hiddenhit">
                    Serafin十周年纪念版平价小煮锅.
                </div>
                <div class="content-exchange">10000+人已经兑换成功</div>
                <div class="content-jf">
                    <div class="jf">
                        690 <span>积分</span>
                    </div>
                    <div class="look">
                        立即查看
                    </div>
                </div>
            </div>
        </div>
        <div class="details-head">
            <div class="head-img">
                <img src="/static/tx.jpg" alt="">
            </div>
            <div class="head-title">Serafin 锅具国际</div>
        </div>
        <div class="details-video">
            <img src="/static/detail_bg.png" alt="">
        </div>
        <div class="details-title">
            探索Serafin品牌,百年老店一定给您最好的烹饪体验，为美味佳肴锦上添花！
        </div>
        <div class="details-introduce">
            <div class="introduce-title">产品简介：</div>
            <div class="introduce-content">探索Serafin品牌,百年老店一定给您最好的烹饪体验，为美味佳肴锦上添花！探索type品牌,百年老店一定给您最好的烹饪体验，为美味佳肴锦上添花！探索Serafin品牌！</div>
        </div>
        <div class="details-bottom">
            <div class="bottom-input">
                <input type="text" placeholder="写评论" v-model="chattext" @keyup.enter="sendtent">
            </div>
            <div class="bottom-comment" @click="chatappear">
                <img src="/static/chat.png" alt="">
                <yd-badge type="danger">56</yd-badge>
            </div>
            <div class="bottom-fav" >
                <img src="/static/fav.png" alt="">
            </div>
            <div class="bottom-share" @click="share">
                <img src="/static/share.png" alt="">
            </div>
           
        </div>
         <div class="bottom-chat" :class="{'appear-chat':appearchat}" >
             <!-- @touchmove.prevent -->
               <ul>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   <li>
                       <div class="chat-head">
                           <div class="head-left">
                               <div class="head-image"></div>
                               <div class="head-name">不保暖的拖鞋</div>
                            </div>
                            <div class="head-right">
                                <div class="head-time">32分钟前</div>
                            </div>
                       </div>
                       <div class="head-content">
                           哇咔咔！颜值真的好高！！作为一个颜值控，我实在拒绝不了！！买买买买买！
                       </div>
                   </li>
                   
               </ul>
        </div>
        <div class="chat-mask" v-if="appearchat"  @click="chatappear"></div>
        <div class="share-mask" v-if="shareison" @click="share">
            <div class="text">
                爱尚广告
            </div>
            <div class="text">
                分享给小伙伴双倍积分哦！
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="details"]{
        width: 100%;
        min-height: r(1334px);
        background-color: rgb(33, 33, 33);
        overflow: hidden;
        .recommend{
            width: 100%;
            height:r(208px);
            background-color: #2C2C2C;
            padding: r(25px);
            display: flex;
            .recommend-img{
                width: r(200px);
                height: r(156px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .recommend-content{
                width: r(479px);
                margin-left: r(21px);
                .content-title{
                    font-family: PingFangSC-Semibold;
                    font-size: r(32px);
                    color: #FFFFFF;
                    padding-bottom: r(16px);
                }
                .content-exchange{
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #CBCBCB;
                    padding-bottom: r(16px);
                }
                .content-jf{
                    display: flex;
                    justify-content: space-between;
                    .jf{
                        font-family: AvenirNext-DemiBold;
                        font-size: r(34px);
                        color: #F79F00;
                        span{
                            font-size: r(24px);
                        }
                    }
                    .look{
                        width: r(98px);
                        height: r(42px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: PingFangSC-Regular;
                        font-size: r(20px);
                        color: #2E2D2D;
                        background: #F79F00;
                        border-radius: 21px;
                    }
                }
            }
        }
        .details-head{
            width: 100%;
            height: r(105px);
            display: flex;
            align-items: center;
            padding-top: r(25px);
            padding-left: r(20px);
            .head-img{
                width: r(80px);
                height: r(80px);
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .head-title{
                font-family: PingFangSC-Semibold;
                font-size: r(30px);
                color: #FFFFFF;
                margin-left: r(13px);
            }
        }
        .details-video{
            width: 100%;
            height:r(340px);
            margin-top: r(25px);
            img{
                width: 100%;
                height: 100%;
            }
        }
        .details-title{
            padding: r(20px);
            font-family: PingFangSC-Semibold;
            font-size: r(30px);
            color: #FFFFFF;
        }
        .details-introduce{
            padding: r(20px);
            font-family: PingFangSC-Regular;
            font-size: r(26px);
            color: #CDCDCD;
        }
        .details-bottom{
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 20;
            width: 100%;
            height: r(108px);
            background-color: #212121;
            box-shadow: inset 0 1px 0 0 rgba(83,83,83,0.50);
            display: flex;
            align-items: center;
            padding-left: r(23px);
            .bottom-input{
                width: r(425px);
                height: r(64px);
                input{
                    width: 100%;
                    height: 100%;
                    border: none;
                    vertical-align: top;
                    background-color:rgba(54,54,54,1);
                    border-radius: r(32px);
                    font-family: PingFangSC-Regular;
                    font-size: r(26px);
                    color: #FFFFFF;
                    padding: r(14px) 0;
                    padding-left: r(27px);
                }
            }
            .bottom-comment{
                width: r(45px);
                height: r(37px);
                margin-left: r(48.6px);
                position: relative;
                .badge{
                    position: absolute;
                    top: r(-25px);
                    left: r(20px);
                    font-size: r(20px);

                }
                img{
                    width: 100%;
                }
            }
            .bottom-fav{
                width: r(50px);
                height: r(41.8px);
                margin-left: r(59.2px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .bottom-share{
                width: r(36px);
                height: r(45px);
                margin-left: r(35px);
                img{
                    width: 100%;
                    height: 100%;
                }
            }
           
        }
         .bottom-chat{
                position: fixed;
                bottom: r(-592px);
                left: 0;
                z-index: 10;
                width: 100%;
                height: r(700px);
                background-color: rgba(46,46,46,1);
                border-top-left-radius: r(50px);
                border-top-right-radius: r(50px);
                overflow: hidden;
                overflow-y: auto;
                transition: all 0.3s linear;
                padding: r(23px);
                ul{
                    li{
                        padding-bottom: r(26px);
                        .chat-head{
                            display: flex;
                            justify-content: space-between;
                            .head-left{
                                display: flex;
                                align-items: center;
                            }
                            .head-right{
                                display: flex;
                                align-items: center;
                            }
                            .head-image{
                                width: r(65px);
                                height: r(65px);
                                border-radius: 50%;
                                background-image: url("/static/tx.jpg");
                                background-size: cover;
                            }
                            .head-name{
                                font-family: PingFangSC-Regular;
                                font-size: r(26px);
                                color: #FFFFFF;
                                margin-left: r(18px);
                            }
                            .head-time{
                                font-family: PingFangSC-Regular;
                                font-size: r(24px);
                                color: #9C9C9C;
                            }
                        }
                        .head-content{
                            padding-top: r(8px);
                            font-family: PingFangSC-Regular;
                            font-size: r(28px);
                            color: #DBDBDB;
                            margin-left: r(83px);
                        }
                    }
                }
            }
            .chat-mask{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 8;
            }
            .share-mask{
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 20;
                background-color: rgba(0,0,0,0.8);
                background-image: url("/static/share_mask.png");
                background-repeat: no-repeat;
                background-size: r(471px);
                background-position-x: r(236px);
                background-position-y: r(30px);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .text{
                    font-family: PingFangSC-Regular;
                    font-size: r(32px);
                    color: #FFFFFF;
                    margin-bottom: r(10px);
                }
            }
    }
</style>
<script>

    export default{
        data(){
            return{
                appearchat:false,
                chattext:"",
                shareison:false,
            }
        },
        methods:{
            chatappear(){
                let that = this;
                that.appearchat = !that.appearchat;
                console.log(1);
            },
            sendtent(){
                let that = this;
                alert(that.chattext);
            },
            share(){
                let that = this;
                that.shareison = !that.shareison;
            }
        },
        watch: {

        },
        components:{

        },
        filters: {

        },
        mounted(){

        }
    }
</script>
