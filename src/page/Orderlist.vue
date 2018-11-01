<template>
    <div i="orderlist" style="font-size: 1rem;">
        <div class="orderlist-head">
            <ul>
                <li class="orderlist-active">全部</li>
                <li>待发货</li>
                <li>已发货</li>
                <li>待评价</li>
                <li>已评价</li>
            </ul>
        </div>
        <div class="orderlist-list">
            <ul>
                <li>
                    <div class="list-top">
                        <div class="list-time">下单时间：2018-11-05</div>
                        <div class="list-status">待发货</div>
                    </div>
                    <div class="list-bottom">
                        <div class="list-image">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhix">
                                庄科科技十周年纪念版平价mini烤箱(特卖限时3天)庄科科技十周年纪念版平价mini烤箱(特卖限时3天)
                            </div>
                            <div class="content-jf">
                                <div class="jf">
                                    690 <span>积分</span>
                                </div>
                                <div class="exchange-num">
                                    1000+人兑换成功
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list-top">
                        <div class="list-time">下单时间：2018-11-05</div>
                        <div class="list-status">待发货</div>
                    </div>
                    <div class="list-bottom">
                        <div class="list-image">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhix">
                                庄科科技十周年纪念版平价mini烤箱(特卖限时3天)
                            </div>
                            <div class="content-jf">
                                <div class="jf">
                                    690 <span>积分</span>
                                </div>
                                <div class="exchange-num">
                                    1000+人兑换成功
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list-top">
                        <div class="list-time">下单时间：2018-11-05</div>
                        <div class="list-status">待发货</div>
                    </div>
                    <div class="list-bottom">
                        <div class="list-image">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhix">
                                庄科科技十周年纪念版平价mini烤箱(特卖限时3天)
                            </div>
                            <div class="content-jf">
                                <div class="jf">
                                    690 <span>积分</span>
                                </div>
                                <div class="exchange-num">
                                    1000+人兑换成功
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list-top">
                        <div class="list-time">下单时间：2018-11-05</div>
                        <div class="list-status">待发货</div>
                    </div>
                    <div class="list-bottom">
                        <div class="list-image">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhix">
                                庄科科技十周年纪念版平价mini烤箱(特卖限时3天)
                            </div>
                            <div class="content-jf">
                                <div class="jf">
                                    690 <span>积分</span>
                                </div>
                                <div class="exchange-num">
                                    1000+人兑换成功
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="list-top">
                        <div class="list-time">下单时间：2018-11-05</div>
                        <div class="list-status">待发货</div>
                    </div>
                    <div class="list-bottom">
                        <div class="list-image">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhix">
                                庄科科技十周年纪念版平价mini烤箱(特卖限时3天)
                            </div>
                            <div class="content-jf">
                                <div class="jf">
                                    690 <span>积分</span>
                                </div>
                                <div class="exchange-num">
                                    1000+人兑换成功
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
    [i="orderlist"]{
        width: 100%;
        min-height:r(1334px);
        background-color: rgb(240, 240, 240);
        .orderlist-head{
            width: 100%;
            background-color: #fff;
            position: fixed;
            top:0;
            left: 0;
            ul{
                width: 100%;
                display: flex;
                li{
                    width: 20%;
                    height: r(88px);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: PingFangSC-Semibold;
                    font-size: r(30px);
                    color: #818181;
                    position: relative;
                }
            }
        }
        .orderlist-list{
            width: 100%;
            padding: r(20px);
            padding-top: r(108px);
            ul{
                li{
                    background-color: #fff;
                    padding:r(25px) r(20px) r(48px) r(20px);
                    margin-bottom: r(20px);
                    .list-top{
                        display: flex;
                        justify-content: space-between;
                        .list-time{
                            font-family: PingFangSC-Semibold;
                            font-size: r(28px);
                            color: #4A4A4A;
                        }
                        .list-status{
                            font-family: PingFangSC-Semibold;
                            font-size: r(30px);
                            color: #000000;
                        }
                    }
                    .list-bottom{
                        margin-top: r(56px);
                        display: flex;
                        .list-image{
                            width: r(170px);
                            height: r(128px);
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .list-content{
                            margin-left: r(20px);
                            width: r(438px);
                            .content-title{
                                width: r(438px);
                                font-family: PingFangSC-Semibold;
                                font-size: r(28px);
                                color: #000000;
                            }
                            .content-jf{
                                display: flex;
                                justify-content: space-between;
                                align-items: flex-end;
                                height: r(32px);
                                margin-top: r(20px);
                                .jf{
                                    font-family: AvenirNext-DemiBold;
                                    font-size: r(32px);
                                    color: #F1593B;
                                    span{
                                        font-size: r(24px);
                                    }
                                }
                                .exchange-num{
                                    font-family: PingFangSC-Regular;
                                    font-size: r(26px);
                                    color: #000000;
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
