<template>
    <div i="sureorder" style="font-size: 1rem;">
        <div class="sureorder-head">
            <div class="head-content">
                <div class="content-top">
                    <div class="top-icon"></div>
                    <div class="top-name">张大大</div>
                    <div class="top-phone">13856234521</div>
                    <div class="address-status">默认</div>
                </div>
                <div class="content-bottom">
                    <div class="content-address hiddenhix">
                        广东省 广州市天河区长福路207号长兴智汇商务中心752座
                    </div>
                    <div class="right-icon"></div>
                </div>
            </div>
        </div>
        <div class="sureorder-content">
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
        </div>
        <div class="remarks">
            <div class="remarks-title">
                备注
            </div>
            <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
            <yd-input  v-model="input1" max="20" placeholder="限制下字数为20个字符" :show-error-icon="false" :show-success-icon="false" :show-required-icon="false"></yd-input>
             <!-- <yd-textarea slot="right" placeholder="限制下字数为20个字符" maxlength="20"></yd-textarea> -->
        </div>
        <div class="zj">
            共 1 件商品，合计：<span>690</span>/积分
        </div>
         <div class="shopdetail-btm">
            <div class="btn-collect">
               合计：<span>690</span> /积分
            </div>
            <router-link to="shopstatus">
            <div class="btn-buy">
                立即兑换
            </div>
            </router-link>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="sureorder"]{
        .sureorder-head{
            width: 100%;
            height: r(215px);
            background-color: #F79F00;
            position: relative;
            .head-content{
                width: r(710px);
                height: r(215px);
                background: #FFFFFF;
                box-shadow: 0 0 r(27px) r(4px) rgba(57,58,59,0.08);
                border-radius: r(8px);
                position:absolute;
                top: r(57px);
                left: 50%;
                transform: translateX(-50%);
                background-image: url("/static/bottom_x.png");
                background-repeat: no-repeat;
                background-position-y: r(205px);
                padding: 0 r(27px);
                padding-top: r(41px);
                .content-top{
                    display: flex;
                    align-items: center;
                    .top-icon{
                        width: r(42px);
                        height: r(42px);
                        background-image: url("/static/address.png");
                        background-size: cover;
                    }
                    .top-name{
                        font-family: PingFangSC-Semibold;
                        font-size: r(30px);
                        color: #000000;
                        margin-left: r(16px);
                    }
                    .top-phone{
                        font-family: PingFangSC-Semibold;
                        font-size: r(30px);
                        color: #000000;
                        margin-left: r(15px);
                    }
                    .address-status{
                        width: r(86px);
                        height: r(37px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: PingFangSC-Light;
                        font-size: r(22px);
                        color: #6A6C6B;
                        border: r(1px) solid #979797;
                        border-radius: r(4px);
                        margin-left: r(190px);
                    }
                }
                .content-bottom{
                    padding-top: r(11px);
                    padding-left: r(60px);
                    display: flex;
                    .content-address{
                        width: r(552px);
                        font-family: PingFangSC-Regular;
                        font-size: r(26px);
                        color: #757575;
                    }
                    .right-icon{
                        width: r(26px);
                        height: r(26px);
                        background-image: url("/static/right.png");
                        background-size: contain;
                        background-repeat: no-repeat;
                        margin-left: r(20px);
                        margin-top: r(10px);
                    }
                }
            }
        }
        .sureorder-content{
            padding: 0 r(10px);
            padding-top: r(75px);

            .shop-msg{
                .msg-title{
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #4A4A4A;
                }
                .msg-list{
                    width: r(710px);
                    height: r(184px);
                    background-color: #FAFAFA;
                    margin-left: r(10px);
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
        }
        .remarks{
            display: flex;
            height: r(42px);
            align-items: center;
            margin-top: r(30px);
            margin-left: r(20px);
            .remarks-title{
                width: r(144px);
                height: r(42px);
               
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #4A4A4A;
            }
            input{
                width: r(540px);
                font-family: PingFangSC-Regular;
                font-size: r(30px);
                color: #818181;
                &::-webkit-input-placeholder{
                    text-align: right;
                }
            }
        }
        .zj{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            position: fixed;
            left: 0;
            bottom: r(100px);
            padding: r(16px);
            background-color: #fff;
            font-family: PingFangSC-Regular;
            font-size: r(26px);
            color: #4A4A4A;
            span{
                font-family: AvenirNext-DemiBold;
                font-size: r(34px);
                color: #000000;
            }
        }
        .shopdetail-btm{
            width: 100%;
            height: r(100px);
            display: flex;
            align-items: center;
            position: fixed;
            left: 0;
            bottom: 0;
            padding: r(16px);
            background-color: #fff;
            .btn-collect{
                width: r(288px);
                height: r(80px);
                background-image: linear-gradient(-118deg, #4A4A4A 9%, #202020 100%);
                border-radius: r(43.5px) 0 0 r(43.5px);
                font-family: PingFangSC-Semibold;
                font-size: r(26px);
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
                span{
                    font-size: r(34px);
                }
            }
            .btn-buy{
                width: r(430px);
                height: r(80px);
                background-image: linear-gradient(53deg, #F79F00 0%, #ff7500 65%);
                border-radius: 0 r(43.5px) r(43.5px) 0;
                font-family: PingFangSC-Semibold;
                font-size: r(30px);
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                input1:""
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
