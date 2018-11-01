<template>
    <div i="addphone" style="font-size: 1rem;">
		<yd-cell-group>
        <yd-cell-item>
            <span slot="left"><img src="/static/phone.png" alt=""></span>
            <yd-input slot="right" v-model="phonenum" regex="mobile" placeholder="请输入手机号码"></yd-input>
        </yd-cell-item>
         <yd-cell-item>
            <span slot="left"><img src="/static/verification.png" alt=""></span>
            <yd-input slot="left" v-model="verification"  placeholder="请输入验证码" class="verification"></yd-input>
            <span slot="right">
                <yd-sendcode
            v-model="start1"
            second="60"
            @click.native="sendCode1"
            init-str="获取验证码"
            run-str="{%s}秒"
            reset-str="获取验证码"
            size="large"
    ></yd-sendcode>
            </span>
        </yd-cell-item>
    </yd-cell-group>
    <div class="already">
        完成
    </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="addphone"]{
        padding: r(59px) r(35px) r(0px) r(35px);
        .cell-item{
           height: r(100px);
           margin-bottom: r(35px);
            background: #F6F6F6;
            border-radius: 4px;
            // font-size: r(30px);
            input{
                 &::-webkit-input-placeholder{
                    // font-size: r(30px);
                }
            }
        }
        .m-cell:after{
            border-bottom: none;
        }
        .cell-left{
            padding-right: r(25px);
            img{
                width: r(37px);
            }
        }
        .verification{
            width: r(381px);
            margin-left: r(25px);
            input{
                width: r(381px);
               
            }
        }
        .btn-block{
             width: r(170px);
            height: r(60px);
            margin-top: r(0px);
            font-family: PingFangSC-Regular;
            font-size: r(24px);
            color: #252B3D;
            border-radius: 100px;
        }
        .btn-primary{
            background: #FFFFFF;
        }
        .already{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: r(100px);
            background-color: #2E2D2D;
            border-radius: r(8px);
            font-family: PingFangSC-Semibold;
            font-size: r(32px);
            color: #FFFFFF;
            margin-top: r(78px);
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                phonenum: '',
                verification:'',
                start1: false
            }
        },
        methods:{
             sendCode1() {
                this.$dialog.loading.open('发送中...');
                setTimeout(() => {
                    this.start1 = true;
                    this.$dialog.loading.close();
                    this.$dialog.toast({
                        mes: '已发送',
                        icon: 'success',
                        timeout: 1500
                    });

                }, 1000);
            }
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
