<template>
    <div i="editaddress" style="font-size: 1rem;">
        <div class="editaddress-input">
            <yd-input  v-model="name"  :show-clear-icon="false" :show-error-icon="false" placeholder="收货人"></yd-input>
        </div>
        <div class="editaddress-input">
            <yd-input  v-model="phone"  :show-clear-icon="false" regex="mobile" placeholder="电话"></yd-input>
        </div>
         <div class="editaddress-input">
            <yd-input  v-model="address"  :show-clear-icon="false" placeholder="地址"></yd-input>
        </div>
         <div class="editaddress-input">
            <yd-input  v-model="addressd"  :show-clear-icon="false" placeholder="详细地址"></yd-input>
        </div>
        <div class="editaddress-input">
            <yd-input  v-model="number"  :show-clear-icon="false" placeholder="邮政编码"></yd-input>
        </div>
        <div class="new-address">
               保存
        </div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="editaddress"]{
        .editaddress-input{
            width: 100%;
            height: r(111px);
            padding: r(40px) r(33px) r(30px) r(33px);
            font-family: PingFangSC-Regular;
            font-size: r(30px);
            color: #818181;
            border-bottom: 1px solid #F0F0F0;
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

        }
    }
</style>
<script>

    export default{
        data(){
            return{
                name:"",
                phone:'',
                address:"",
                addressd:'',
                number:''
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
