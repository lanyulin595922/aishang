<template>
    <div i="myfootprint" style="font-size: 1rem;">
        <div class="myfootprint-head">
            <div class="video-title" :class="{'footprint-active':headactive==0}" @click="videohead">点赞视频</div>
            <div class="commodity-title" :class="{'footprint-active':headactive==1}" @click="commodityhead">收藏商品</div>
        </div>
		<div class="integral-list" v-if="headactive==0">
            <ul>
                <li>
                    <div class="list-time">2018-12-5</div>
                    <div class="video">
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
                    </div>
                    <div class="video">
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
                    </div>
                </li>
                <li>
                    <div class="list-time">2018-12-5</div>
                    <div class="video">
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
                </div>
                
                </li>
            </ul>
        </div>
        <div class="integral-list" v-if="headactive==1">
            <ul>
                <li>
                    <div class="list-time">2018-12-5</div>
                    <div class="commodity">
                        <div class="list-img">
                            <div class="collect">
                                <div><img src="/static/star.png" alt=""></div>
                                <span>收藏</span>
                            </div>
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhit">Serafin十周年纪念版平价小煮.</div>
                            <div class="list-integral">
                                <div class="exchange-num">1000+人兑换成功</div>
                                <div class="integral">690 <span>积分</span></div>
                            </div>
                            <div class="list-company">
                                <div><img src="/static/tx.jpg"></div>
                                <div class="company">Serafin 锅具国际有限公司</div>
                            </div>
                            <div class="list-tips">
                                <div class="tips">
                                    积分不足
                                </div>
                                 <div class="tips">
                                    还剩300件
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="commodity">
                        <div class="list-img">
                            <div class="collect">
                                <div><img src="/static/star.png" alt=""></div>
                                <span>收藏</span>
                            </div>
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhit">Serafin十周年纪念版平价小煮.</div>
                            <div class="list-integral">
                                <div class="exchange-num">1000+人兑换成功</div>
                                <div class="integral">690 <span>积分</span></div>
                            </div>
                            <div class="list-company">
                                <div><img src="/static/tx.jpg"></div>
                                <div class="company">Serafin 锅具国际有限公司</div>
                            </div>
                            <div class="list-tips">
                                <div class="tips">
                                    积分不足
                                </div>
                                 <div class="tips">
                                    还剩300件
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="myfootprint"]{
        .myfootprint-head{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: r(100px);
            padding: 0 r(120px);
            font-family: PingFangSC-Semibold;
            font-size: r(36px);
            color: #4A4A4A;
            .video-title{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            .commodity-title{
                width: 50%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                &::before{
                    content: "";
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 0;
                    width:r(3px);
                    height: r(39px);
                    background-color: #A8A8A8;
                }
            }
        }
        .integral-list{
            width: 100%;
            padding: 0 r(20px);
            padding-top: r(120px);
            margin-bottom: r(100px);
            ul{
                li{
                    padding-bottom: r(8px);
                    .list-time{
                        width: r(167px);
                        font-family: PingFangSC-Semibold;
                        font-size: r(28px);
                        color: #4A4A4A;
                        padding: r(8px) r(13px);
                        background: #F0F0F0;
                        border-radius: 4px;
                        margin-bottom: r(29px);
                    }
                .video{
                    width: 100%;
                    height: r(395px);
                    margin-bottom: r(40px);
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
                }
                .commodity{
                    display: flex;
                    width: 100%;
                    padding-bottom: r(28px);
                    margin-top: r(30px);
                    border-bottom: 1px solid #E5E5E5;
                    &:last-of-type{
                        border-bottom: 0px solid #E5E5E5;
                    }
                    .list-img{
                        width: r(240px);
                        height: r(208px);
                        border-radius: r(10px);
                        position: relative;
                        background-image: url("/static/ms.jpg");
                        background-size: cover;
                        padding: 0;
                        .collect{
                            display: flex;
                            width: r(129px);
                            height: r(55px);
                            justify-content: center;
                            align-items: center;
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            background-color: rgba($color: #000000, $alpha: 0.26);
                            img{
                                width: r(36px);
                                background-color: transparent;
                                margin-top: r(0px);
                                margin-bottom: r(5px);
                            }
                            span{
                                font-family: PingFangSC-Regular;
                                font-size: r(24px);
                                color: #FFFFFF;
                                margin-left: r(5px);
                            }
                        }
                    }
                    .list-content{
                        width: r(494px);
                        padding-left: r(21px);
                        .content-title{
                            font-family: PingFangSC-Semibold;
                            font-size: r(32px);
                            color: #000000;
                        }
                        .list-integral{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: flex-end;
                            margin-top: r(9px);
                            .exchange-num{
                                font-family: PingFangSC-Regular;
                                font-size: r(28px);
                                color: #4A4A4A;
                            }
                            .integral{
                                font-family: AvenirNext-DemiBold;
                                font-size: r(34px);
                                color: #F1593B;
                                span{
                                   font-size:r(24px);
                                }
                            }
                        }
                        .list-company{
                            display: flex;
                            margin-top: r(9px);
                            img{
                                width: r(38px);
                                height: r(38px);
                                border-radius:50%; 
                            }
                            .company{
                                font-family: PingFangSC-Regular;
                                font-size: r(28px);
                                color: #AAAAAA;
                                margin-left: r(9px);
                            }
                        }
                        .list-tips{
                            display: flex;
                            .tips{
                                font-family: PingFangSC-Regular;
                                font-size: r(22px);
                                color: #7F9BCF;
                                background-color: #ECF3FF;
                                border-radius: 4px;
                                padding: r(8px) r(11px);
                                margin-right: r(23px);
                                margin-top: r(9px);
                            }
                        }
                    }
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
                headactive:0,
            }
        },
        methods:{
            videohead(){
                let that = this;
                that.headactive = 0;
            },
            commodityhead(){
                let that = this;
                that.headactive = 1;
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
