//基本路由 
export default {
     'addphone': resolve => require(['../page/Addphone.vue'], resolve),
     'address': resolve => require(['../page/Address.vue'], resolve),
     'allcomment': resolve => require(['../page/Allcomment.vue'], resolve),
     'collectshop': resolve => require(['../page/Collectshop.vue'], resolve),
     'details': resolve => require(['../page/Details.vue'], resolve),
     'editaddress': resolve => require(['../page/Editaddress.vue'], resolve),
     'editpersonal': resolve => require(['../page/Editpersonal.vue'], resolve),
     'favlabel': resolve => require(['../page/Favlabel.vue'], resolve),
     'firstin': resolve => require(['../page/Firstin.vue'], resolve),
     'goodcomment': resolve => require(['../page/Goodcomment.vue'], resolve),
     'index': resolve => require(['../page/Index.vue'], resolve),
     'integral': resolve => require(['../page/Integral.vue'], resolve),
     'logistics': resolve => require(['../page/Logistics.vue'], resolve),
     'modifypersonal': resolve => require(['../page/Modifypersonal.vue'], resolve),
     'myfootprint': resolve => require(['../page/Myfootprint.vue'], resolve),
     'orderlist': resolve => require(['../page/Orderlist.vue'], resolve),
     'personal': resolve => require(['../page/Personal.vue'], resolve),
     'shopdetail': resolve => require(['../page/Shopdetail.vue'], resolve),
     'shopstatus': resolve => require(['../page/Shopstatus.vue'], resolve),
     'square': resolve => require(['../page/Square.vue'], resolve),
     'sureorder': resolve => require(['../page/Sureorder.vue'], resolve),
     'wechat_auth_error': resolve => require(['../page/Wechat_auth_error.vue'], resolve),
     'zerobuy': resolve => require(['../page/Zerobuy.vue'], resolve),

       //首页
      '/': resolve => require(['../page/Index.vue'], resolve)
}