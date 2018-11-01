<template>
    <div i="editpersonal" style="font-size: 1rem;">
        <div class="editname">
            <yd-cell-item>
                <span slot="left">请输入名称</span>
                <yd-input slot="right"  v-model="input1" max="20" placeholder=""></yd-input>
            </yd-cell-item>
        </div>
        <div class="name-tip">昵称最多可输入10字长度，包括中文、数字、字符。</div>
        <div class="sure">完成</div>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
    [i="editpersonal"]{
        padding: r(40px) r(35px);
        .editname{
            width: 100%;
            height: r(125px);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #FAFAFA;
            border-radius: r(4px);
            .cell-item{
                width: 100%;
                .cell-left{
                    padding: 0 r(20px);
                    font-family: PingFangSC-Regular;
                    font-size: r(28px);
                    color: #2E2D2D;
                }
            }
        }
        .name-tip{
            width: 100%;
            margin-top: r(22px);
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: r(26px);
            color: #A8A8A8;
        }
        .sure{
            width: 100%;
            height: r(100px);
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #2E2D2D;
            border-radius: r(4px);
            font-family: PingFangSC-Regular;
            font-size: r(34px);
            color: #FFFFFF;
            margin-top: r(166px);
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
