<template>
    <div i="modifypersonal" style="font-size: 1rem;">
		<div class="modifypersonal-img">
            <img src="/static/tx.jpg" alt="">
            <div class="camera">
                <img src="/static/camera.png" alt="">
            </div>
        </div>
        <div class="modifypersonal-list">
            <ul>
                <router-link to="editpersonal">
                <li>
                    <div class="list-name">昵称</div>
                    <div class="list-content">
                        <div>看暴风雨1223</div>
                        <div><img src="/static/right.png" alt=""></div>
                    </div>
                </li>
                </router-link>
                <li>
                    <div class="list-name">生日</div>
                    <div class="list-content">
                        <div>1999-08-12</div>
                        <div><img src="/static/right.png" alt=""></div>
                    </div>
                </li>
                <li>
                    <div class="list-name">性别</div>
                    <div class="list-content">
                        <div>女</div>
                        <div><img src="/static/right.png" alt=""></div>
                    </div>
                </li>
                 <li>
                    <div class="list-name">星座</div>
                    <div class="list-content">
                        <div>白羊</div>
                        <div><img src="/static/right.png" alt=""></div>
                    </div>
                </li>
                <li>
                    <div class="list-name">所在地</div>
                    <div class="list-content">
                        <div>请选择地区</div>
                        <div><img src="/static/right.png" alt=""></div>
                    </div>
                </li>
                <li>
                    <div class="list-name">绑定手机</div>
                    <div class="list-content">
                        <div>13856241526</div>
                        <div><img src="/static/right.png" alt=""></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="modifypersonal"]{
        .modifypersonal-img{
            position: relative;
            padding-top: r(40px);
            img{
                width: r(170px);
                height: r(170px);
                border-radius: 50%;
                margin: 0 auto;
            }
            .camera{
                position: absolute;
                top: r(149px);
                left: r(396px);
                width:r(64px);
                height: r(64px);
                border-radius: 50%;
                img{
                    width: 100%;
                    height: auto !important;
                    margin-top: 0;
                }
            }
        }
        .modifypersonal-list{
            padding: 0 r(48px);
            margin-top: r(30px);
            ul{
                li{
                    width: 100%;
                    height: r(115px);
                    display: flex;
                    justify-content: space-between;
                    border-bottom: r(2px) solid #F0F0F0;
                    .list-name{
                        display: flex;
                        align-items: center;
                        font-family: PingFangSC-Regular;
                        font-size: r(30px);
                        color: #2E2D2D
                    }
                    .list-content{
                        display: flex;
                        align-items: center;
                        font-family: PingFangSC-Regular;
                        font-size: r(28px);
                        color: #A8A8A8;
                        img{
                            width: r(13px);
                            margin-left: r(27px);
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
