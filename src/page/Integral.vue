<template>
    <div i="integral" style="font-size: 1rem;">
		<div class="integral-head">
            <ul>
                <li>
                    <div class="num">689</div>
                    <div class="text">当前积分</div>
                </li>
                 <li>
                    <div class="num">1809</div>
                    <div class="text">消费积分</div>
                </li>
                 <li>
                    <div class="num">16</div>
                    <div class="text">已购商品</div>
                </li>
            </ul>
        </div>
        <div class="integral-list">
            <ul>
                <li>
                    <div class="list-time">2018-12-5</div>
                    <ul>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科十周年纪念..(特卖)”</div>
                            <div class="behavior-num">+6</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科”</div>
                            <div class="behavior-num">+10</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科十周年纪念..(特卖)”</div>
                            <div class="behavior-num">+5</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科”</div>
                            <div class="behavior-num">+10</div>
                        </div>
                    </ul>
                </li>
                 <li>
                    <div class="list-time">2018-12-5</div>
                    <ul>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科十周年纪念..(特卖)”</div>
                            <div class="behavior-num">+6</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科”</div>
                            <div class="behavior-num">+10</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科十周年纪念..(特卖)”</div>
                            <div class="behavior-num">+5</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科”</div>
                            <div class="behavior-num">+10</div>
                        </div>
                    </ul>
                </li>
                 <li>
                    <div class="list-time">2018-12-5</div>
                    <ul>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科十周年纪念..(特卖)”</div>
                            <div class="behavior-num">+6</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科”</div>
                            <div class="behavior-num">+10</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科十周年纪念..(特卖)”</div>
                            <div class="behavior-num">+5</div>
                        </div>
                        <div class="behavior-list">
                            <div class="behavior">观看“庄科”</div>
                            <div class="behavior-num">+10</div>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
         <bar :index=3></bar>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="integral"]{
        padding: r(23px);
        
        .integral-head{
            width: 100%;
            height: r(233px);
            background-image: url('/static/integral_bg.png');
            background-size: cover;
            ul{
                display: flex;
                height: 100%;
                li{
                    width: 33.33%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .num{
                        font-family: AvenirNext-DemiBold;
                        font-size: r(54px);
                        color: #F3CF8D;
                    }
                    .text{
                        font-family: PingFangSC-Regular;
                        font-size: r(26px);
                        color: #F3CF8D;
                    }
                }
            }
        }
        .integral-list{
            width: 100%;
            margin-top: r(26px);
            margin-bottom: r(100px);
            ul{
                li{
                    border-bottom: 1px solid #DEDEDE;
                    margin-bottom: r(20px);
                    .list-time{
                        width: r(167px);
                        font-family: PingFangSC-Semibold;
                        font-size: r(28px);
                        color: #4A4A4A;
                        padding: r(8px) r(13px);
                        background: #F0F0F0;
                        border-radius: 4px;
                        margin-bottom: r(18px);
                    }
                    ul{
                        .behavior-list{
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: r(24px);
                            .behavior{
                                font-family: PingFangSC-Regular;
                                font-size: r(30px);
                                color: #000000;
                            }
                            .behavior-num{
                                font-family: AvenirNext-DemiBold;
                                font-size: r(34px);
                                color: #000000;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<script>
import bar from "../components/Bar.vue";
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
            bar
        },
        filters: {

        },
        mounted(){

        }
    }
</script>
