export default {
    lists:[
        '/',
        '/index'
    ],
    isUrl:function (url,type){
        let sym = '==';
        if(type){
             sym = type;
        }
        let that = this;
        let noLoginUrls = '';
        for(var i = 0; i < that.lists.length; i++){
            if(i == that.lists.length-1){
                noLoginUrls += `||"${url}"${sym}"${that.lists[i]}"`;
            }else if(i == 0){
                noLoginUrls += `"${url}"${sym}"${that.lists[i]}"`;
            }else{
                noLoginUrls += `||"${url}"${sym}"${that.lists[i]}"`;
            }
        }
        return eval(noLoginUrls);
    }
}
