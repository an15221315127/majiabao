

/**
 * 获取秒级时间戳
 * @returns {number}
 */
export function gettime(){
    return parseInt(new Date().getTime() / 1000);
}

/**
 *  判断是否在ios设备上
 */
export function onIos(){
    var u = navigator.userAgent;
    var ua = u.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) {  // iOS 系统 ->  跳AppStore下载地址
        //alert("iOS");
        return true;
    }
    return false;
}
