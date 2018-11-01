<template>
    <div i="allcomment" style="font-size: 1rem;">
        <div class="allcomment-head">
            <ul>
                <li class="allcomment-active">
                    全部评论
                </li>
                <li>
                    好评(12)
                </li>
                <li>
                    中评(0)
                </li>
                <li>
                    差评(0)
                </li>
                <li>
                    晒图(5)
                </li>
            </ul>
        </div>
        <div class="comment-list">
            <ul>
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
                <li>
                    <div class="list-top">
                        <div class="top-left">
                            <div class="list-image"></div>
                            <div class="list-name">
                                <div class="name">欧安协的隔壁家</div>
                                <div class="time">2018-12-05</div>
                            </div> 
                        </div>
                        <div class="top-right">
                            <yd-rate slot="left" v-model="rate1" :readonly="true" color="#F79F00" active-color="#F79F00" size="16px"></yd-rate>
                        </div>
                    </div>
                    <div class="list-content">
                        漂亮又大气，实在太美啦，怎么会这么好看一生推啊！！开心HAHHAHAHA
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
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="allcomment"]{
        .allcomment-head{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            ul{
                width: 100%;
                height: r(90px);
                display: flex;
                border-bottom: 1px solid #F0F0F0;
                li{
                    width: 20%;
                    font-family: PingFangSC-Semibold;
                    font-size: r(28px);
                    color: #616161;
                    padding-top: r(30px);
                    text-align: center;
                    position: relative;
                }
            }
        }
        .comment-list{
            padding-top: r(90px);
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
    }
</style>
<script>
    export default{
        data(){
            return{
                rate1:4
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
