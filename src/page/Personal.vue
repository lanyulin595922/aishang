<template>
    <div i="personal" style="font-size: 1rem;">
		<div class="personal-head">
            <div class="personal-card">
                <router-link to="modifypersonal">
                    <div class="modify">
                    修改资料
                    </div>
                </router-link>
                <div class="personal-img">
                    <img src="/static/tx.jpg" alt="">
                </div>
                <div class="personal-name">
                    看暴风雨1223
                </div>
               <router-link to="addphone">
                <div class="personal-phone">
                   立即绑定手机
                </div>
               </router-link>
            </div>
            <div class="personal-list">
                <ul>
                    <li>
                        <div class="left">
                            <div>
                                <img src="/static/personal1.png" alt="">
                            </div>
                            <div class="list-name">积分说明</div>
                        </div>
                        <div class="right">
                            <img src="/static/right.png" alt="">
                        </div>
                    </li>
                     <li>
                        <router-link to="myfootprint">
                            <div class="left">
                                <div>
                                    <img src="/static/personal2.png" alt="">
                                </div>
                                <div class="list-name">我的足迹</div>
                            </div>
                            <div class="right">
                                <img src="/static/right.png" alt="">
                            </div>
                        </router-link>
                    </li>
                     <li>
                        <router-link to="orderlist">
                            <div class="left">
                                <div>
                                    <img src="/static/personal3.png" alt="">
                                </div>
                                <div class="list-name">订单列表</div>
                            </div>
                            <div class="right">
                                <img src="/static/right.png" alt="">
                            </div>
                        </router-link>
                    </li>
                    
                     <li>
                        <router-link to="address">
                        <div class="left">
                            <div>
                                <img src="/static/personal4.png" alt="">
                            </div>
                            <div class="list-name">收货地址</div>
                        </div>
                        <div class="right">
                            <img src="/static/right.png" alt="">
                        </div>
                        </router-link>
                    </li>
                     <li>
                        <router-link to="goodcomment">
                            <div class="left">
                                <div>
                                    <img src="/static/personal5.png" alt="">
                                </div>
                                <div class="list-name">点赞/评价</div>
                            </div>
                            <div class="right">
                                <img src="/static/right.png" alt="">
                            </div>
                        </router-link>
                    </li>
                     <li>
                        <router-link to="collectshop">
                            <div class="left">
                                <div>
                                    <img src="/static/personal6.png" alt="">
                                </div>
                                <div class="list-name">我的收藏</div>
                            </div>
                            <div class="right">
                                <img src="/static/right.png" alt="">
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <bar :index=4></bar>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="personal"]{
        .personal-head{
            position: relative;
            width: 100%;
            height: r(376px);
            background-image: url('/static/my_bg.png');
            background-size: 100%;
            background-repeat: no-repeat;
            .personal-card{
                position: absolute;
                top: r(138px);
                left: 50%;
                transform: translateX(-50%);
                width: r(700px);
                height: r(238px);
                background:#fff;
                box-shadow: 0 9px 21px 0 rgba(0,0,0,0.05);
                border-radius: r(8px);
                .modify{
                    position: absolute;
                    top: r(17px);
                    right: r(17px);
                    width: r(130px);
                    height: r(50px);
                    background-image: linear-gradient(70deg, #F79F00 0%, #FCCD00 65%);
                    border-radius: 25px;
                    font-family: PingFangSC-Semibold;
                    font-size: r(22px);
                    color: #000000;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    cursor: pointer;
                }
                .personal-img{
                     img{
                        width: r(153px);
                        height: r(153px);
                        border-radius: 50%;
                        border: 3px solid #fff;
                        margin: 0 auto;
                        margin-top: r(-76px);
                    }
                }
                .personal-name{
                    font-family: PingFangSC-Semibold;
                    font-size: r(36px);
                    color: #000;
                    text-align: center;
                    margin-top: r(19px);
                    margin-bottom: r(3px);
                }
                .personal-phone{
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #9B9B9B;
                    text-align: center;
                }
            }
            .personal-list{
                padding: 0 r(41px);
                padding-top: r(379px);
                padding-bottom:r(150px); 
                ul{
                    li{
                        width: 100%;
                        height: r(131px);
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        border-bottom: 1px solid #F0F0F0;
                        a{
                            width: 100%;
                            height: r(131px);
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                        .left{
                            display: flex;
                            img{
                            width: r(48px);
                            height: r(48px);
                        }
                        }
                        .right{
                            img{
                                width: r(13px);
                            }
                        }
                       
                        .list-name{
                            font-family: PingFangSC-Semibold;
                            font-size: r(30px);
                            color: #2E2D2D;
                            margin-left: r(20px);
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
