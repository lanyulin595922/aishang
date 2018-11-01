<template>
    <div i="square" style="font-size: 1rem;">
		<div class="square-head">
            <div class="square-title">广场</div>
            <ul>
                <li class="zt-color">饮食</li>
                <li>教育</li>
                <li>健康</li>
                <li>育儿</li>
                <li>出行</li>
            </ul>
        </div>
        <div class="square-list">
            <ul>
                <li>
                   <router-link to="details">
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
                   </router-link>
                </li>
                 <li>
                   <router-link to="details">
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
                   </router-link>
                </li>
                 <li>
                   <router-link to="details">
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
                   </router-link>
                </li>
                 <li>
                   <router-link to="details">
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
                   </router-link>
                </li>
                 <li>
                   <router-link to="details">
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
                   </router-link>
                </li>
            </ul>
        </div>
        <bar :index=1></bar>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="square"]{
        .square-head{
            padding: r(18px);
            display: flex;
            margin-bottom: r(8px);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: r(88px);
            z-index: 10;
            background-color: #fff;
            .square-title{
                font-size: r(50px);
                font-family: PingFangSC-Semibold;
                color: #000000;
                letter-spacing: 0;
                margin-right: r(45px);
            }
            ul{
                display: flex;
                align-items: center;
                li{
                    font-family: PingFangSC-Semibold;
                    font-size: r(32px);
                    color: #4A4A4A;;
                    margin-right: r(37px);
                }
            }
        }
        .square-list{
            width: 100%;
            padding: 0 r(20px);
           padding-bottom: r(150px);
            margin-top: r(100px);
            ul{
                width: 100%;
                li{
                    width: 100%;
                    height: r(395px);
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
