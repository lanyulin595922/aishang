<template>
    <div i="shopstatus" style="font-size: 1rem;">
        <div class="shopstatus-head">
            <div class="head-title">
                <div class="title-text">交易成功！</div>
                <div class="title-tip">祝你生活愉快！</div>
            </div>
            <div class="head-image"></div>
        </div>
        <div class="shopstatus-logistics">
            <div class="logistics">
                <div class="logistics-left">
                    <div class="logistics-icon"></div>
                    <div class="logistics-msg">
                        <div class="msg hiddenhix">
                            江西信丰县工业原因园公司1022已签收签收人：本人签收
                        </div>
                        <div class="time">
                            2017-05-24 20:34:35
                        </div>
                    </div>
                </div>
                <div class="logistics-right">
                    <div class="right-icon"></div>
                </div>
            </div>
            <div class="myaddress">
                <div class="myaddress-icon"></div>
                <div class="myaddress-msg">
                    <div class="name-phone">
                       <div class="name">张大大</div>
                       <div class="phone">13856234521</div>
                    </div>
                    <div class="address hiddenhix">广东省 广州市天河区长福路207号长兴智汇商务中心752座</div>
                </div>
            </div>
        </div>
        <div class="shop-msg">
               <div class="msg-title">商品信息：</div>
               <div class="msg-list">
                   <div class="list-image"></div>
                   <div class="list-text">
                       <div class="list-title">
                           Serafin十周年纪念版平价mini煮锅赠品实木勺子餐具
                       </div>
                       <div class="list-num">
                           <div class="price">
                               690 <span>积分</span>
                           </div>
                           <div class="num">
                               x1
                           </div>
                       </div>
                   </div>
               </div>
        </div>
        <div class="status-company">
            <div class="company-left">配送企业</div>
            <div class="company-right">Serafin 锅具国际有限公司</div>
        </div>
        <div class="status-express">
            <div class="express-left">快递</div>
            <div class="express-right">免运费</div>
        </div>
       <div class="something">
            <div class="status-something">
                <div class="something-left">发货时间</div>
                <div class="something-right">2017.04.01 06:03:26</div>
            </div>
            <div class="status-something">
                <div class="something-left">成交时间</div>
                <div class="something-right">2017.04.01 06:03:26</div>
            </div>
            <div class="status-something">
                <div class="something-left">订单编号</div>
                <div class="something-right">44551125660401101012341015</div>
            </div>
       </div>
        <div class="status-btm">
            <router-link to="logistics">
                <div class="btm-logistics">查看物流</div>
            </router-link>
            <div class="btm-evaluate">评价</div>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="shopstatus"]{
        .shopstatus-head{
            width: 100%;
            height: r(200px);
            background-color: rgb(242, 157, 39);
            padding: r(23px) r(20px);
            display: flex;
            justify-content: space-between;
            .head-title{
                padding-top: r(10px);
                .title-text{
                    font-family: PingFangSC-Semibold;
                    font-size: r(38px);
                    color: #FFFFFF;
                }
                .title-tip{
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #FFFFFF;
                }
            }
            .head-image{
                width: r(143px);
                height: r(108px);
                background-image: url("/static/status1.png");
                background-size: cover;
            }
        }
        .shopstatus-logistics{
            width: r(710px);
            height: r(355px);
            margin: 0 auto;
            margin-top: r(-55px);
            background: #FFFFFF;
            box-shadow: 0 0 r(32px) r(4px) rgba(57,58,59,0.08);
            border-radius: r(8px);
            .logistics{
                display: flex;
                height: 50%;
                justify-content: space-between;
                padding-right: r(27px);
                padding-left: r(27px);
                padding-top: r(34px);
                .logistics-left{
                    display: flex;
                    .logistics-msg{
                        width: r(567px);
                        .msg{
                            font-family: PingFangSC-Semibold;
                            font-size: r(30px);
                            color: #2A2A2A;
                        }
                        .time{
                            margin-top: r(5px);
                            font-family: PingFangSC-Regular;
                            font-size: r(26px);
                            color: #A5A5A5;
                        }
                    }
                    .logistics-icon{
                        width: r(42px);
                        height: r(42px);
                        background-image: url("/static/hc.png");
                        background-size: cover;
                        margin-right: r(26px);
                        margin-top: r(10px);
                    }
                }
                .logistics-right{
                    display: flex;
                    height: 100%;
                    align-items: center;
                    .right-icon{
                        width: r(26px);
                        height: r(26px);
                        background-image: url("/static/right.png");
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                }
            }
            .myaddress{
                padding-left: r(27px);
                display: flex;
                .myaddress-icon{
                    width: r(42px);
                    height: r(42px);
                    background-image: url("/static/address.png");
                    background-size: cover;
                }
                .myaddress-msg{
                    margin-left: r(15px);
                    .name-phone{
                        display: flex;
                        .name{
                            font-family: PingFangSC-Semibold;
                            font-size: r(30px);
                            color: #000000;
                        }
                        .phone{
                            font-family: PingFangSC-Semibold;
                            font-size: r(30px);
                            color: #000000;
                            margin-left: r(15px);
                        }
                    }
                    .address{
                        width: r(567px);
                        font-family: PingFangSC-Regular;
                        font-size: r(26px);
                        color: #757575;
                    }
                }
            }
        }
        .shop-msg{
            padding: 0 r(20px);
            padding-top: r(30px);
                .msg-title{
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #4A4A4A;
                }
                .msg-list{
                    width: r(710px);
                    height: r(184px);
                    background-color: #FAFAFA;
                    margin-top: r(16px);
                    padding: r(28px) r(20px);
                    display: flex;
                    .list-image{
                        width: r(170px);
                        height: r(128px);
                        background-image: url("/static/ms.jpg");
                        background-size: cover;
                    }
                   .list-text{
                       width: r(482px);
                       margin-left: r(18px);
                    .list-title{
                        font-family: PingFangSC-Semibold;
                        font-size: r(30px);
                        color: #000000;
                    }
                    .list-num{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: r(14px);
                        .price{
                            font-family: AvenirNext-DemiBold;
                            font-size: r(32px);
                            color: #F1593B;
                            span{
                                font-size: r(24px);
                            }
                        }
                        .num{
                            font-family: Helvetica;
                            font-size: r(28px);
                            color: #424242;
                        }
                }
                }
            }
        }
        .status-company{
            display: flex;
            justify-content: space-between;
            padding:r(25px) r(20px);
            .company-left{
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #4A4A4A;
            }
            .company-right{
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #818181;
            }
        }
        .status-express{
            display: flex;
            justify-content: space-between;
            padding:r(25px) r(20px);
            border-top: 1px solid #f2f2f2;
            border-bottom: 1px solid #f2f2f2;
            .express-left{
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #4A4A4A;
            }
            .express-right{
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #818181;
            }
        }
        .something{
            padding-bottom: r(120px);
        }
        .status-something{
            display: flex;
            justify-content: space-between;
            padding:r(20px);
            .something-left{
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #4A4A4A;
            }
            .something-right{
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #818181;
            }
        }
        .status-btm{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            height: r(100px);
            position: fixed;
            left: 0;
            bottom: 0;
            border-top: 1px solid #f6f6f6;
            background-color: #fff;
            .btm-logistics{
                font-family: PingFangSC-Semibold;
                font-size: r(28px);
                color: #3F3F3F;
                padding: r(10px) r(25px);
                border: 1px solid #646464;
                border-radius: r(8px);
            }
            .btm-evaluate{
                font-family: PingFangSC-Semibold;
                font-size: r(28px);
                color: #3F3F3F;
                padding: r(10px) r(25px);
                border: 1px solid #646464;
                border-radius: r(8px);
                margin-right: r(21px);
                margin-left: r(30px);
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
