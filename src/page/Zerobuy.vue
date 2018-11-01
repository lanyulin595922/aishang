<template>
    <div i="zerobuy" style="font-size: 1rem;">
		<div class="zerobuy-head">
            <div class="head-top">
                <div class="head-title">
                    0元购
                </div>
                <div class="zerobuy-integral">
                    当前积分: <span>{{shopintegral}}</span>
                </div>
            </div>
            <div class="head-bottom">
                <ul>
                    <li class="zt-color">全部</li>
                    <li>推荐</li>
                    <li>五百积分</li>
                    <li>一千积分</li>
                    <li>五千积分</li>
                </ul>
            </div>
        </div>
        <div class="zerobut-list">
            <div class="list-search">
                <img src="/static/sousuo.png" alt="">
                <input type="text" placeholder="搜索你想要的商品...">
            </div>
            <div class="list">
                <ul>
                    <li @click="toUrl('/shopdetail',{id:data.id})" v-for="(data,index) in shoplist">
                        <div class="list-img">
                            <div class="collect">
                                <div><img src="/static/star.png" alt=""></div>
                                <span>收藏</span>
                            </div>
                        </div>
                        <div class="list-content">
                            <div class="content-title hiddenhit">{{data.title}}</div>
                            <div class="list-integral">
                                <div class="exchange-num">{{data.content1}}</div>
                                <div class="integral">{{data.integral}} <span>积分</span></div>
                            </div>
                            <div class="list-company">
                                <div class="company"><img src="/static/tx.jpg"></div>
                                <div class="company">{{data.brand_name}}</div>
                            </div>
                            <div class="list-tips">
                                <div class="tips">
                                    积分不足
                                </div>
                                 <div class="tips">
                                    {{data.content2}}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <bar :index=2></bar>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
[i="zerobuy"]{
    .zerobuy-head{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;
        height: r(212px);
        padding-left:r(18px);
        padding-top: r(38px);
        background-color: #fff;
        .head-top{
            display: flex;
            justify-content: space-between;
            margin-bottom: r(29px);
            .head-title{
                font-family: PingFangSC-Semibold;
                font-size: r(50px);
                color: #000000;
            }
            .zerobuy-integral{
                display: flex;
                justify-content: center;
                align-items: center;
                
                width: r(240px);
                height: r(70px);
                border-top-left-radius: r(50px);
                border-bottom-left-radius: r(50px);
                background-color: #0F0F0E;
                font-family: PingFangSC-Regular;
                font-size: r(28px);
                color: #F79F00;
                span{
                    display: block;
                    font-size: r(38px);
                    // margin-top: r(2px);
                    margin-left: r(10px);
                }
            }
        }
        .head-bottom{
            ul{
                display: flex;
                li{
                    font-family: PingFangSC-Semibold;
                    font-size: r(32px);
                    color: #4A4A4A;
                    letter-spacing: 0;
                    text-align: left;
                    margin-right: r(31px);
                }
            }
        }
    }
    .zerobut-list{
        width: 100%;
        padding: 0 r(20px);
        padding-top: r(242px);
        padding-bottom: r(100px);
        .list-search{
            width: 100%;
            display: flex;
            position: relative;
            img{
                position: absolute;
                top: r(18px);
                left: r(33px);
                width: r(33px);
            }
            input{
                width: r(710px);
                height: r(70px);
                background: #F4F4F4;
                border-radius: r(8px);
                padding-left: r(84px);
                font:100% tahoma,\5b8b\4f53,arial;
                font-size: r(26px);
                border: none;
                &::-webkit-input-placeholder {
                    font-family: PingFangSC-Regular;
                    font-size: r(26px);
                    color: #A8A8A8;
                }
                
            }
        }
        .list{
           
            ul{
                li{
                    display: flex;
                    width: 100%;
                    padding-bottom: r(30px);
                    margin-top: r(30px);
                    border-bottom: 1px solid #E5E5E5;
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
    import bar from "../components/Bar.vue";
    export default{
        data(){
            return{
                shoplist:[],
                shopintegral:""
            }
        },
        methods:{
            getShoplist(){
                let that = this;
                tools.alert.loading();
                tools.ajax({
                    url: "/api/shop/goods",
                    ajaxData: {},
                    successFun:function(res){
                        // console.log(res.list.data);
                        that.shoplist = res.list.data;
                        that.shopintegral = res.data.points
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
            bar
        },
        filters: {

        },
        mounted(){
            let that = this;
            that.getShoplist();
        }
    }
</script>
