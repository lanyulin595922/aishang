<template>
    <div i="bar" style="font-size: 1rem;">
		<ul>
            <li>
                <router-link to="./square">
                    <div class="bar-img" :style="'background-image:url('+bar1+');'">
                    <!-- <img :src="bar1" alt=""> -->
                    </div>
                    <div class="bar-name">广场</div>
                </router-link>
            </li>
            <li>
                <router-link to="./zerobuy">
                    <div class="bar-img" :style="'background-image:url('+bar2+');'">
                    <!-- <img :src="bar2" alt=""> -->
                    </div>
                    <div class="bar-name">0元购</div>
                </router-link>
            </li>
             <li>
               <router-link to="./integral">
                    <div class="bar-img" :style="'background-image:url('+bar3+');'">
                    <!-- <img :src="bar3" alt=""> -->
                    </div>
                    <div class="bar-name">积分清单</div>
               </router-link>
            </li>
             <li>
               <router-link to="personal">
                    <div class="bar-img" :style="'background-image:url('+bar4+');'">
                    <!-- <img :src="bar4" alt=""> -->
                    </div>
                    <div class="bar-name">我的</div>
               </router-link>
            </li>
        </ul>
    </div>
</template>
<style rel="stylesheet/scss" lang="scss">
@import "../assets/sass/common/tool.scss";
@import "../assets/sass/common/common.scss";
[i="bar"]{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: r(100px);
    background-color: #fff;
    box-shadow: 0 -4px 17px 0 rgba(0,0,0,0.08);
   ul{
       width: 100%;
       height: 100%;
       display: flex;
       li{
           width: 25%;
          a{
            width: 100%;
            height: 100%;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           .bar-img{
                width: r(46px);
                height: r(46px);
               background-image: url("/static/bar1.png");
               background-size: cover;
           }
           .bar-name{
               display: block;
                font-family: PingFangSC-Semibold;
                font-size: r(20px);
                color: #020202;
                text-align: center;
                margin-top: r(2px);
           }
          }
       }
   }
}
</style>
<script>

    export default{
        props:{
            index:""
        },
        data(){
            return{
                bar1:'/static/bar1.png',
                bar2:'/static/nbar2.png',
                bar3:'/static/nbar3.png',
                bar4:'/static/nbar4.png',
            }
        },
        methods:{
            imgchange(){
                let that = this;
                switch (that.index) {
                    case 1:
                        that.bar1='/static/bar1.png';
                        that.bar2='/static/nbar2.png';
                        that.bar3='/static/nbar3.png';
                        that.bar4='/static/nbar4.png';
                        break;
                    case 2:
                        that.bar1='/static/nbar1.png';
                        that.bar2='/static/bar2.png';
                        that.bar3='/static/nbar3.png';
                        that.bar4='/static/nbar4.png';
                        break;
                     case 3:
                        that.bar1='/static/nbar1.png';
                        that.bar2='/static/nbar2.png';
                        that.bar3='/static/bar3.png';
                        that.bar4='/static/nbar4.png';
                        break;
                    case 4:
                        that.bar1='/static/nbar1.png';
                        that.bar2='/static/nbar2.png';
                        that.bar3='/static/nbar3.png';
                        that.bar4='/static/bar4.png';
                        break;
                    default:
                        break;
                }
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
           that.imgchange();
        }
    }
</script>
