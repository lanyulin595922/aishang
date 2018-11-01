/* 配置错误处理 */

/*
 例子:
 {
     errcode: 'NO LOGIN',                         //错误代码
     prompt: '你还没有登录或登录超时,请登录...',      //错误提示,空字符为不提示
     url: '/login'                               //跳转地址,true为刷新当前页,空字符串为不跳转
     fun: function () {                          //操作方法,空字符串为无

     }
 }
 */

let is_init = true;

export default {
    data: [
        {
            errcode: 'AUTHORIZATION_INVALID',
            prompt: '会话已过期,请重新登录',
            url: true,
            fun: function () {

                /* 避免多次执行 */
                if(!is_init){
                    return false;
                }

                is_init = false;

                tools.cache.set('Authorization', '');
                tools.cache.set('isLogin', 0);

                tools.alert.error('会话已过期，页面即将刷新');

                // setTimeout(function () {
                //
                //     if(tools.router.currentRoute.path == '/login'){
                //         tools.loginStatus.check({
                //             type: 'login'
                //         });
                //     }else{
                //         var __url = '';
                //         if(location.href.indexOf('?') != '-1'){
                //             __url = location.href.substring(location.href.indexOf('?'));
                //         }
                //         var url = tools.router.currentRoute.path + __url;
                //         tools.router.replace({path: '/login', query: {callback: encodeURIComponent(url)}});
                //     }
                //
                // }, 0);

            }
        },
        {
            errcode: 'NO LOGIN',
            prompt: '你还没有登录或登录超时,请登录...',
            url: true,
            fun: function () {
                //更改本地登录状态
                window.tools.cache.set('isLogin',0);
            }
        }
    ]

}
