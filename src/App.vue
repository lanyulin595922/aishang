<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
            is_wxjs: true,       //是否选择默认微信配置
            is_init: true,       //是否初始化
        }
    },
    components:{
    },
    name: 'app',
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'isLinkChange'
    },
    created(){
        let that = this;

        window.App = new tools.vue();

        window.App.$on('wxConfig', function(type){
            that.is_wxjs = type;
        });

        /*
            **混合 （请认真查看使用方法 https://vuefe.cn/v2/guide/mixins.html）
            **注意同名钩子函数将混合为一个数组，因此都将被调用。且先调用混合对象的钩子
            **
        */
        tools.vue.mixin({
            /* 全局方法 */
            methods: {
                /* 默认图片过滤 */
                thumbnail: function (val, size) {
                    return !val ? app.defaultImg() : val + (!size ? '' : size);
                },

                /* 跳转 */
                toUrl: function (url, val) {
                    tools.router.push({path: url, query: val});
                },

                /* 查看大图 */
                seeImg: function (imgUrl,arr) {
                    let imgArr = arr;
                    if(arr === undefined){
                        imgArr = [imgUrl];
                    }
                    app.seeImg(imgUrl,imgArr);
                }
            },
            /* 全局过滤 */
            filters: {
                /* 默认图片过滤 */
                thumbnail: function (val, size) {
                    return !val ? app.defaultImg() : val + (!size ? '' : size);
                },

                /* 时间转换 */
                timeTran: function (value) {
                    return parseInt(value) === 0 ? '-' : tools.date('Y-m-d H:i:s', value);
                },

                /* 自定时间格式转换 */
                setTimeTran: function (value, type) {
                    return parseInt(value) === 0 ? '-' : tools.date(type, value);
                },

                /* 价格转换--保留两位小数 */
                toFixedPrice : function (value) {
                    return value ? (parseInt(value) / 100).toFixed(2) : '0';
                },

                /* 价格转换 */
                toPrice: function (value) {
                    return value ? (parseInt(value) / 100) : '0';
                }
            }
        });
        // 编辑器下载附件的方法
        window.attach_download = function(e) {
            e = e || window.event;
            console.log(e.target.getAttribute('src'))
            if (app.isWeChat()&&app.device().ios) {
                tools.alert.error('请在浏览器中打开下载');
                return;
            }
            // window.location.href = e.target.getAttribute('src');
        }
    },
    methods:{
        isLinkChange : function(){
            let that = this;
            // console.log('改变了导航:',this.$route);

            //微信分享
            that.$nextTick(function () {
                setTimeout(function () {

                    //ios
                    if(app.device().ios && app.isWeChat() && that.is_wxjs){
                        app.wechatjs.ready({
                            share_url : location.href,
                            share_title: document.title
                        });
                    }

                    //安卓
                    if(!app.device().ios && app.isWeChat() && that.is_wxjs){ //判断是否为微信

                        app.wechatjs.config = false;
                        app.wechatjs.share_config = {
                            share_url : location.href,
                            share_title: document.title
                        };
                        app.wechatjs.run({
                            api_url: '/api/wechat/js',
                            ajax_data: {
                                url: location.href
                            },
                            // debug: true
                        })

                    }

                },500)
            })
        },
        /*后台自定义统计*/
			getPhp: function (id, key) {
				var hm = document.createElement("script"); //创建一个script标签
				hm.setAttribute('id', id);
				// hm.src = "https://unicom.collect.han-zi.cn/js.php?ak=" + key;
				hm.src = "http://10.1.1.11:8099/js.php?ak=" + key;
				var s = document.getElementsByTagName("script")[0]; //找到html页面中的第一个script,以便往它之前插入一个script标签
				s.parentNode.insertBefore(hm, s);
			},
    },
    mounted(){
        let that = this;
        that.getPhp('midautum', 'XA8vj2mDCbMk6Bae');
        

        // ydui UI
        if(localStorage.getItem('PULLREFRESH-TIP') == undefined){
            localStorage.setItem('PULLREFRESH-TIP',1); //防止下拉刷新组件弹出提示
        }

        tools.router.afterEach((to, from, next) => {
            if(that.is_init){
                that.is_init = false;

                that.$nextTick(function () {
                    setTimeout(function () {
                        //ios
                        if(app.device().ios && that.is_wxjs){
                            app.wechatjs.config = false;
                            app.wechatjs.share_config = {
                                share_url : location.href,
                                share_title: document.title
                            };
                            app.wechatjs.run({
                                api_url: '/api/wechat/js',
                                ajax_data: {
                                    url:tools.cache.get('initUrl')
                                }
                            })
                        }
                    },500);
                });
            }
        })

    }
}
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
