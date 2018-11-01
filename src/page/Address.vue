<template>
    <div i="address" style="font-size: 1rem;">
		<div class="address-list">
            <ul>
                <li>
                    <div class="list-top">
                        misteryqu   138****4521
                    </div>
                    <div class="list-mid hiddenhix">
                        广东省 广州市 天河区 长福路207号 长兴智汇中心长兴路207号 d4a03
                    </div>
                    <div class="list-btm">
                       <div class="default-address">
                           <div class="address-btn"></div>
                           <div class="address-text">设置默认</div>
                       </div>

                       <div class="address-operation">
                           <div class="address-edit">
                               <div class="edit-img"></div>
                               <div class="edit-text">编辑</div>
                           </div>
                           <div class="address-edit">
                               <div class="edit-img" style="background-image: url('/static/del.png');"></div>
                               <div class="edit-text">删除</div>
                           </div>
                       </div>
                    </div>
                </li>
                <li>
                    <div class="list-top">
                        misteryqu   138****4521
                    </div>
                    <div class="list-mid hiddenhix">
                        广东省 广州市 天河区 长福路207号 长兴智汇中心长兴路207号 d4a03
                    </div>
                    <div class="list-btm">
                       <div class="default-address">
                           <div class="address-btn" style="background-image: url('/static/addresstick.png');"></div>
                           <div class="address-text">设置默认</div>
                       </div>
                       <div class="address-operation">
                           <div class="address-edit">
                               <div class="edit-img"></div>
                               <div class="edit-text">编辑</div>
                           </div>
                           <div class="address-edit">
                               <div class="edit-img" style="background-image: url('/static/del.png');"></div>
                               <div class="edit-text">删除</div>
                           </div>
                       </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="new-address">
           <router-link to="editaddress">
               新建地址
           </router-link>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="address"]{
        width: 100%;
        min-height: 100vh;
        background-color: rgb(247, 247, 247);
        .address-list{
            ul{
                li{
                    width: 100%;
                    height: r(277px);
                    background-color: #fff;
                    padding:r(28px) r(45px);
                    margin-bottom: r(20px);
                    .list-top{
                        font-family: PingFangSC-Semibold;
                        font-size: r(30px);
                        color: #202020;
                    }
                    .list-mid{
                        font-family: PingFangSC-Regular;
                        font-size: r(26px);
                        color: #818181;
                        margin-top: r(16px);
                        margin-bottom: r(24px);
                    }
                    .list-btm{
                        padding-top: r(33px);
                        padding-bottom: r(27px);
                        border-top: 1px solid #F1F2F6;
                        display: flex;
                        justify-content: space-between;
                        .default-address{
                            display: flex;

                        }
                        .address-text{
                            font-family: PingFangSC-Medium;
                            font-size: r(26px);
                            color: #4A4A4A;
                            margin-left: r(22px);
                        }
                        .address-btn{
                            width: r(34px);
                            height: r(34px);
                            border-radius: 50%;
                            background-image: url("/static/addressntick.png");
                            background-size: cover;
                        }
                        .address-operation{
                            display: flex;
                            .address-edit{
                                display: flex;
                                align-items: center;
                                margin-left: r(54px);
                                .edit-img{
                                    width: r(30px);
                                    height: r(30px);
                                    border-radius: 50%;
                                    background-image: url("/static/edit.png");
                                    background-size: cover;
                                }
                                .edit-text{
                                    font-family: PingFangSC-Regular;
                                    font-size: r(26px);
                                    color: #797979;
                                    margin-left: r(14px);
                                }
                            }
                        }
                    }
                }
            }
        }
        .new-address{
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            width: r(680px);
            height: r(100px);
            background-color: #2E2D2D;
            border-radius: r(8px);
            font-family: PingFangSC-Semibold;
            font-size: r(32px);
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
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
