<template>
    <div i="logistics1" style="font-size: 1rem;">
        <div class="shop-msg">
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
    <div class="logistics-h">
        <yd-step theme="2" current="4" current-color="#F79F00">
            <yd-step-item name="1">
                <span slot="top">已发货</span>
                <span slot="bottom">泰州市</span>
            </yd-step-item>
            <yd-step-item name="2">
                <span slot="top">运输中</span>
            </yd-step-item>
            <yd-step-item name="3">
                <span slot="top">派件中</span>
            </yd-step-item>
            <yd-step-item name="4">
                <span slot="top">已签收</span>
                <span slot="bottom">成都市</span>
            </yd-step-item>
        </yd-step>
    </div>
    <div class="logistics-s">
        <ul>
            <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="x"></div>
                <div class="logistics-msg">
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
            <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="x"></div>
                <div class="logistics-msg">
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
            <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="x"></div>
                <div class="logistics-msg">
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
            <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="logistics-msg">
                    <div class="x"></div>
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
             <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="logistics-msg">
                    <div class="x"></div>
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
             <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="logistics-msg">
                    <div class="x"></div>
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
             <li>
                <div class="time">
                    <div class="time-time">08:54</div>
                    <div class="time-date">2018-08-02</div>
                </div>
                <div class="icon"></div>
                <div class="logistics-msg">
                    <div class="x"></div>
                    <div class="logistics-status">运输中</div>
                    <div class="logistics-address">离开【湖南中转站】，下一站【重庆直辖】</div>
                </div>
            </li>
        </ul> 
    </div>
</div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="logistics1"]{
        .shop-msg{
            padding: 0 r(20px);
            padding-top: r(20px);
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
        .logistics-h{
            margin-top: r(40px);
        }
        .yd-step-theme2 .yd-step-item-current .yd-step-item-top-text>span{
            color: #000000;
        }
        .logistics-s{
            width: 100%;
           ul{
               li{
                   display: flex;
                   justify-content: center;
                   align-items: center;
                   padding-bottom: r(50px);
                   position: relative;
                   color: #888888;
                   &:first-of-type .icon{
                       background-color: #F79F00;
                       background-image: url("/static/btop.png");
                   }
                   &:first-of-type{
                       color: #000;
                   }
                   &:first-of-type .x{
                       top: 40%;
                   }
                   &:last-of-type .x{
                       bottom: 60%;
                   }
                   .time{
                       display: flex;
                       flex-direction: column;
                       justify-content: center;
                       align-items: center;
                       margin-right: r(36px);
                       .time-time{
                            font-family: PingFangSC-Regular;
                            font-size: r(34px);
                       }
                       .time-date{
                            font-family: PingFangSC-Regular;
                            font-size: r(22px);
                       }
                   }
                   .icon{
                       width: r(30px);
                       height: r(30px);
                       background-color: #E0E0E0;
                       border-radius: 50%;
                       position: relative;
                       z-index: 10;
                       background-image: url("/static/wtop.png");
                       background-size: contain;
                       background-repeat: no-repeat;
                       background-position-y: r(5px);
                   }
                   .x{
                        width: r(3px);
                        background-color: #F0F0F0;
                        position: absolute;
                        top: 0;
                        left: r(243px);
                        bottom: 0;
                        z-index: 0;
                   }
                   .logistics-msg{
                       width: r(400px);
                       margin-left: r(28px);
                       .logistics-status{
                            font-family: PingFangSC-Regular;
                            font-size: r(28px);
                       }
                       .logistics-address{
                            font-family: PingFangSC-Regular;
                            font-size: r(24px);
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
