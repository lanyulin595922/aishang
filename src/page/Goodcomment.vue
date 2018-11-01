<template>
    <div i="goodcomment" style="font-size: 1rem;">
		<div class="goodcomment-list">
            <ul>
                <li>
                    <div class="list-top">
                        <div class="list-mask">
                            <div class="list-text">探索type品牌,百年老店一定给您最好的烹饪体验，为美味佳肴锦上添花！</div>
                            <img src="/static/bf.png" alt="">
                            <div class="tips">分享3倍积分</div>
                        </div>
                    </div>
                    <div class="list-bottom clearfix">
                        <div class="list-headimg fl">
                            <img src="/static/tx.jpg" alt="">
                        </div>
                        <div class="list-name fl">Type lili</div>
                         <div class="list-talk fr">
                            <img src="/static/nice.png" alt="">
                            <span>120</span>
                        </div>
                        <div class="list-talk fr">
                            <img src="/static/talk.png" alt="">
                            <span>142</span>
                        </div>
                    </div>
                    <div class="list-comment">
                       我的评论: 这个视频真的很生动！！！！
                    </div>
                </li>
                 <li>
                    <div class="list-top">
                        <div class="list-mask">
                            <div class="list-text">探索type品牌,百年老店一定给您最好的烹饪体验，为美味佳肴锦上添花！</div>
                            <img src="/static/bf.png" alt="">
                            <div class="tips">分享3倍积分</div>
                        </div>
                    </div>
                    <div class="list-bottom clearfix">
                        <div class="list-headimg fl">
                            <img src="/static/tx.jpg" alt="">
                        </div>
                        <div class="list-name fl">Type lili</div>
                         <div class="list-talk fr">
                            <img src="/static/nice.png" alt="">
                            <span>120</span>
                        </div>
                        <div class="list-talk fr">
                            <img src="/static/talk.png" alt="">
                            <span>142</span>
                        </div>
                    </div>
                    <!-- <div class="list-comment">
                       我的评论: 这个视频真的很生动！！！！
                    </div> -->
                </li>
                 <li>
                    <div class="list-top">
                        <div class="list-mask">
                            <div class="list-text">探索type品牌,百年老店一定给您最好的烹饪体验，为美味佳肴锦上添花！</div>
                            <img src="/static/bf.png" alt="">
                            <div class="tips">分享3倍积分</div>
                        </div>
                    </div>
                    <div class="list-bottom clearfix">
                        <div class="list-headimg fl">
                            <img src="/static/tx.jpg" alt="">
                        </div>
                        <div class="list-name fl">Type lili</div>
                         <div class="list-talk fr">
                            <img src="/static/nice.png" alt="">
                            <span>120</span>
                        </div>
                        <div class="list-talk fr">
                            <img src="/static/talk.png" alt="">
                            <span>142</span>
                        </div>
                    </div>
                    <div class="list-comment">
                       我的评论: 这个视频真的很生动！！！！
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="goodcomment"]{
       .goodcomment-list{
           padding: r(20px);
           ul{
               li{
                    width: 100%;
                    margin-bottom: r(41px);
                    .list-top{
                        width: 100%;
                        height: r(340px);
                        background-image: url("../../static/ms.jpg");
                        background-repeat: no-repeat;
                        background-size:cover;
                        position: relative;
                        border-radius: 8px;
                        .list-mask{
                            position: absolute;
                            top: 0;
                            left: 0;
                            z-index: 0;
                            width: 100%;
                            height: 100%;
                            padding: r(23px) r(14px) r(0px) r(14px);
                            border-radius: 8px;
                            text-align: right;
                            background-image: linear-gradient(-180deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.00) 100%);
                            .list-text{
                            font-family: PingFangSC-Semibold;
                            font-size: r(30px);
                            color: #FFFFFF;
                            text-align: left;
                            margin-bottom: r(19px);
                            }
                            img{
                                width: r(90px);
                                height: r(90px);
                                margin: 0 auto;
                            }
                            .tips{
                                display: inline-block;
                                padding:r(8px) r(14px);
                                font-family: PingFangSC-Semibold;
                                font-size: r(24px);
                                color: #FFFFFF;
                                margin-top: r(56px);
                                background-color: rgba(0, 0, 0, 0.25)
                            }
                        }
                        
                    }
                    .list-bottom{
                        width: 100%;
                        height: r(55px);
                        padding-right: r(20px);
                        padding-left: r(20px);
                        .list-headimg{
                            position: relative;
                            width: r(80px);
                            height: r(80px);
                            border-radius:50%;
                            overflow: hidden;
                            margin-top: r(-25px);
                            z-index: 2;
                            img{
                                width: 100%;
                                
                            }
                        }
                        .list-name{
                            margin-top: r(18px);
                            margin-left: r(7px);
                            font-family: PingFangSC-Semibold;
                            font-size: r(26px);
                            color: #4A4A4A;
                        }
                        .list-talk{
                            margin-top: r(15px);
                            font-size: r(24px);
                            display: flex;
                            align-items: center;
                            margin-left: r(34px);
                            span{
                                display: flex;
                                align-items: center;
                                height: r(41px);
                                margin-left: r(8px);
                            }
                            img{
                                width: r(41px);
                                height: r(41px);
                            }
                        }
                    }
                    .list-comment{
                        display: flex;
                        flex-wrap: wrap;
                        width: 100%;
                        min-height: r(97px);
                        background-color: #FAFAFA;
                        font-family: PingFangSC-Semibold;
                        font-size: r(28px);
                        color: #2E2D2D;
                        padding: 0 r(20px);
                        padding-top: r(18px);
                        padding-bottom: r(18px);
                    }
                }
           }
       }
    }
</style>
<script>

    export default{
        data(){
            return{

            }
        },
        methods:{

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
