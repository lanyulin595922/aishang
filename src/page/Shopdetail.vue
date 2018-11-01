<template>
    <div i="shopdetail" style="font-size: 1rem;">
		<div class="shopdetail-show">
            <img src="/static/shopdetail.jpg" alt="">
        </div>
        <div class="shopdetail-price">
            {{shopmsg.integral}} <span>积分</span>
        </div>
        <div class="shopdetail-title hiddenhix">
            {{shopmsg.title}}
        </div>
        <div class="shopdetail-comment">
            <div class="comment-rate">
                好评率{{shopmsg.good_feedback_rate}}%
            </div>
            <div class="comment-all">
                <router-link to="allcomment">
                    查看全部评价
                </router-link>
            </div>
        </div>
        <div class="comment-list">
            <ul>
                <li v-for="(data,index) in shopchat">
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">{{data.username}}</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="data.star" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        {{data.content}}
                    </div>
                    <div class="comment-image">
                        <div class="image-list">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="image-list">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                        <div class="image-list">
                            <img src="/static/ms.jpg" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shopdetail-img">
            <div class="img-title">商品详情</div>
            <div class="img-list">
                <ul>
                    <li>
                         <img src="/static/ms.jpg" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="shopdetail-btm">
            <div class="btn-collect">
                收藏
            </div>
            <router-link to="sureorder">
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
    [i="shopdetail"]{
        .shopdetail-price{
            padding: 0 r(24px);
            padding-top: r(34px);
            font-family: AvenirNext-DemiBold;
            font-size: r(52px);
            color: #F1593B;
            span{
                font-family: PingFangSC-Regular;
                font-size: r(28px);  
            }
        }
        .shopdetail-title{
            padding: 0 r(24px);
            padding-top: r(16px);
            font-family: PingFangSC-Semibold;
            font-size: r(32px);
            color: #000000;
        }
        .shopdetail-comment{
            padding: 0 r(24px);
            padding-top: r(48px);
            padding-bottom: r(20px);
            border-bottom: r(1px) solid #F0F0F0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .comment-rate{
                font-family: PingFangSC-Semibold;
                font-size: r(28px);
                color: #4A4A4A;
                position: relative;
                padding-left: r(20px);
                &::before{
                    content:'';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                    width: r(8px);
                    height: r(26px);
                    background-color: #F79F00;
                    border-radius: r(6px);
                }
            }
            .comment-all{
                font-family: PingFangSC-Semibold;
                font-size: r(24px);
                color: #818181;
                position: relative;
                padding-right: r(20px);
                &::after{
                    content:'';
                    position: absolute;
                    top: 50%;
                    right: 0;
                    width: r(12px);
                    height: r(21px);
                    transform: translateY(-50%);
                    background-image: url("/static/right.png");
                    background-size: cover;
                }
            }
            
        }
        .comment-list{
                ul{
                    li{
                        padding: r(27px) r(24px);
                        border-bottom: 1px solid #F0F0F0;
                        .list-top{
                            display: flex;
                            justify-content: space-between;
                            .top-left{
                                display: flex;
                                .list-image{
                                    width: r(68px);
                                    height: r(68px);
                                    border-radius: 50%;
                                    background-image: url("/static/tx.jpg");
                                    background-size: cover;
                                }
                                .list-name{
                                    display: flex;
                                    flex-direction: column;
                                    margin-left: r(21px);
                                    .name{
                                        font-family: PingFangSC-Semibold;
                                        font-size: r(28px);
                                        color: #4A4A4A;
                                    }
                                    .time{
                                        font-family: PingFangSC-Regular;
                                        font-size: r(24px);
                                        color: #818181;
                                    }
                                }
                            }
                            .top-right{
                                display: flex;
                                align-items: center;
                            }
                        }
                        .list-content{
                            font-family: PingFangSC-Regular;
                            font-size: r(30px);
                            color: #000000;
                            padding-left: r(90px);
                            padding-top: r(14px);
                        }
                        .comment-image{
                            display: flex;
                            flex-wrap: wrap;
                            padding-left: r(90px);
                            padding-top: r(28px);
                            .image-list{
                                width: r(190px);
                                margin-right: r(13px);
                                img{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
        }
        .shopdetail-img{
            padding-top: r(40px);
            .img-title{
                font-family: PingFangSC-Semibold;
                font-size: r(30px);
                color: #373737;
                padding-left: r(28px);
                padding-bottom: r(18px);
            }
            .img-list{
                ul{
                    li{
                        img{
                            width: 100%;
                        }
                    }
                }
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
                width: r(214px);
                height: r(80px);
                background-image: linear-gradient(-118deg, #4A4A4A 9%, #202020 100%);
                border-radius: r(43.5px) 0 0 r(43.5px);
                font-family: PingFangSC-Semibold;
                font-size: r(26px);
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .btn-buy{
                width: r(499px);
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
                rate1:4,
                shopmsg:'',
                shopchat:[],
            }
        },
        methods:{
            getData(){
                let that = this;
                let id = tools.url.params('id')
                tools.alert.loading();
                tools.ajax({
                    url: "/api/shop/goods/"+id,
                    ajaxData: {},
                    successFun:function(res){
                        that.shopmsg = res.data;
                        that.shopchat = res.list;
                        console.log(res.list);
                        tools.alert.closeLoading();
                    },
                    errorFun: function(error_data, status, headers, error_obj) {
                        tools.alert.error(error_data.error_msg);
                        tools.alert.closeLoading();
                    },
                    type: "GET"
                })

            }
        },
        watch: {

        },
        components:{

        },
        filters: {

        },
        mounted(){
            let that = this;
            that.getData();
        }
    }
</script>
