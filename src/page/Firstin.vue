<template>
    <div i="firstin" style="font-size: 1rem;">
		<div class="firstin-title">Hi，请输入以下信息1</div>
        <div class="firstin-tip">欢迎来到爱尚广告，填写一下信息呗~~~</div>
        <div class="firstin-sex">
            <div class="sex-title">性别</div>
            <div class="sex-img">
                <div class="sex-one">
                    <div class="sex-boy" @click="ticksex(1)">
                    <div class="sex-tick" v-if="sex==1"></div>
                    </div>
                    <div>男生</div>
                </div>
                <div class="sex-two">
                    <div class="sex-girl" @click="ticksex(0)">
                    <div class="sex-tick" v-if="sex==0"></div>
                    </div>
                    <div>女生</div>
                </div>
            </div>
        </div>
        <div class="firstin-constellation">
            <div class="constellation-title">生日</div>
            <div class="constellation-select" @click="show">
                <div class="constellation-content">
                    {{constellation}}
                </div>
                <div class="down"></div>
            </div>
            <awesome-picker
            ref="picker"
            :data="picker.data"
            :anchor="picker.anchor"
            @cancel="handlePickerCancel"
            @confirm="handlePickerConfirm">
            </awesome-picker>
        </div>
        <div class="firstin-constellation">
            <div class="constellation-title">手机</div>
            <div class="constellation-select">
                <div class="constellation-phone">
                   <yd-input  v-model="phone" regex="mobile" placeholder="请输入手机号码"></yd-input>
                </div>
            </div>
        </div>
        <div class="firstin-constellation">
            <div class="constellation-title">验证码</div>
            <div class="constellation-select">
                <div class="constellation-validate">
                   <yd-input :show-error-icon=false :show-success-icon=false :show-required-icon=false  required v-model="validate" max="10" placeholder="请输入验证码"></yd-input>
                </div>
                <div class="send-validate">
                     <yd-sendcode
                            v-model="start1"
                            @click.native="sendCode1"
                            second="60"
                            init-str="获取验证码"
                            run-str="{%s}秒"
                            reset-str="获取验证码"
                            size="large"
                            type="hollow">
                    </yd-sendcode>
                </div>
            </div>
        </div>
        <router-link to="favlabel">
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
    [i="firstin"]{
        padding-top: r(40px);
        padding-left: r(40px);
        padding-right: r(40px);
        .firstin-title{
            font-family: PingFangSC-Regular;
            font-size: r(48px);
            color: #000000;
        }
        .firstin-tip{
            font-family: PingFangSC-Regular;
            font-size: r(26px);
            color: #818181;
            margin-top: r(14px);
        }
        .firstin-sex{
            margin-top: r(51px);
            .sex-title{
                font-family: PingFangSC-Regular;
                font-size: r(32px);
                color: #000000;
                padding-bottom: r(50px);
            }
            .sex-img{
                display: flex;
                .sex-one{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #2E2D2D;
                    text-align: center;
                }
                .sex-two{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #2E2D2D;
                    text-align: center;
                    margin-left: r(154px);
                }
                .sex-boy{
                    width: r(150px);
                    height: r(150px);
                    border-radius:50%;
                    background-image: url("/static/boy.png");
                    background-size: cover;
                    position: relative;
                    margin-bottom: r(5px);
                    .sex-tick{
                        width: r(36px);
                        height: r(36px);
                        border-radius: 50%;
                        background-image: url("/static/tick.png");
                        background-size: cover;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }
                .sex-girl{
                    width: r(150px);
                    height: r(150px);
                    border-radius:50%;
                    background-image: url("/static/girl.png");
                    background-size: cover;
                    position: relative;
                    .sex-tick{
                        width: r(36px);
                        height: r(36px);
                        border-radius: 50%;
                        background-image: url("/static/tick.png");
                        background-size: cover;
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }
            }
        }
        .firstin-constellation{
            margin-top: r(38px);
            .constellation-title{
                font-family: PingFangSC-Regular;
                font-size: r(32px);
                color: #000000;
            }
            .constellation-select{
                width: 100%;
                height: r(72px);
                margin-top: r(30px);
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #F0F0F0;
                .constellation-content{
                    font-family: PingFangSC-Regular;
                    font-size: r(30px);
                    color: #A8A8A8;
                }
                .constellation-phone{
                    width: 100%;
                    font-family: PingFangSC-Regular;
                    font-size: r(30px);
                    color: #A8A8A8;
                }
                .constellation-validate{
                     width: 50%;
                    font-family: PingFangSC-Regular;
                    font-size: r(30px);
                    color: #A8A8A8;
                }
                .send-validate{
                    .btn-block{
                        width: r(151px);
                        // padding: 0 r(10px);
                        height: r(47px);
                        font-family: PingFangSC-Regular;
                        font-size: r(26px);
                        color: #000000;
                        margin-top: 0;
                    }
                    .btn-hollow{
                        border: none;
                    }
                }
                .down{
                    width: r(26px);
                    height: r(15px);
                    background-image: url("/static/down.png");
                    background-size: cover;
                }
            }
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
                sex:"",
                picker:{
                    data:[
                        // ['2019','2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007'],
                        ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
                        ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
                    ],
                    anchor:[
                        { 
                            index: 0,
                            value: 'A'
                        },
                        {
                            index: 0,
                            value: 'A-a'
                        } 
                    ]
                },
                constellation:"请选择日期",
                phone:'',
                validate:'',
                start1:false
            }
        },
        methods:{
            ticksex(g){
                let that = this;
                that.sex = g;
            },
            getYear(){
                let that = this;
                let arr=[];
                let date=new Date;
                let year=date.getFullYear();
                for(let i=0;i<(year-1899);i++){
                    arr.push(year-i);
                }
                that.picker.data.unshift(arr);
            },
            show() {
                this.$refs.picker.show();
            },
            handlePickerCancel(item){
                let that = this;
            },
            handlePickerConfirm(item){
                let that = this;
                //  console.log(item)
                let date=new Date;
                let year=date.getFullYear().toString();
                let month = date.getMonth().toString();
                if(month<10){
                    month = '0'+month
                }
                let day = date.getDate().toString();
                if(day<10){
                    day = '0'+day
                }
                if((item[0].value+item[1].value+item[2].value)>(year+month+day)){
                    alert("选择的生日不能大于今天");
                    return
                }
                console.log(year+month+day);
                console.log(item[0].value+item[1].value+item[2].value)
                that.constellation = item[0].value+'/'+item[1].value+'/'+item[2].value
            },
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
            let that = this;
            that.getYear()
        }
    }
</script>
