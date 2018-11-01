<template>
    <div i="favlabel" style="font-size: 1rem;">
		<div class="favlabel-title">请选择你感兴趣的标签</div>
        <div class="favlabel-tip">我们会根据你的选中展示你喜欢的内容</div>
        <div class="favlabel-list">
            <ul>
                <li>
                    <div class="list-image" style="background-image: url('/static/label1.png');">
                        <div class="tick"></div>
                    </div>
                    <div class="list-name">星座</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label2.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">星座</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label3.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">数码</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label4.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">服饰</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label5.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">家具</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label6.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">厨具</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label7.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">美食</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label8.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">生活</div>
                </li>
                <li>
                    <div class="list-image" style="background-image: url('/static/label9.png');">
                        <div class="tick" style="background-image: url('/static/label.png');"></div>
                    </div>
                    <div class="list-name">配饰</div>
                </li>
            </ul>
        </div>
        <router-link to="square">
            <div class="start">开始体验</div>
        </router-link>
        <router-link to="square">
            <div class="nextpage">
                跳过
                <div class="nextpage-img"><img src="/static/nextpage.png" alt=""></div>
            </div>
        </router-link>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="favlabel"]{
        padding: r(40px) r(35px);
        .favlabel-title{
            width: 100%;
            font-family: PingFangSC-Regular;
            font-size: r(40px);
            color: #000000;
            text-align: center;
        }
        .favlabel-tip{
            width: 100%;
            font-family: PingFangSC-Regular;
            font-size: r(26px);
            color: #818181;
            text-align: center;
            margin-top: r(15px);
        }
        .favlabel-list{
            padding: 0 r(20px);
            margin-top: r(48px);
            ul{
                display: flex;
                flex-wrap: wrap;
                margin-bottom: r(48px);
                li{
                    width: 33%;
                    margin-bottom: r(44px);
                    .list-image{
                        margin: 0 auto;
                        width: r(160px);
                        height: r(160px);
                        border-radius: 50%;
                        background-image: url("/static/label1.png");
                        background-size: cover;
                        position: relative;
                        .tick{
                            position: absolute;
                            right: 0;
                            bottom: 0;
                            width: r(36px);
                            height: r(36px);
                            border-radius: 50%;
                            background-image: url("/static/tick.png");
                            background-size: cover;
                        }
                    }
                    .list-name{
                        font-family: PingFangSC-Regular;
                        font-size: r(30px);
                        color: #2E2D2D;
                        text-align: center;
                        margin-top: r(11px);
                    }
                }
            }
        }
        .start{
            width: 100%;
            height: r(100px);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #2E2D2D;
            border-radius: r(8px);
            font-family: PingFangSC-Semibold;
            font-size: r(32px);
            color: #FFFFFF;
        }
        .nextpage{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: r(57px);
            font-family: PingFangSC-Semibold;
            font-size: r(28px);
            color: #A8A8A8;
            .nextpage-img{
                img{
                    width: r(30px);
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
