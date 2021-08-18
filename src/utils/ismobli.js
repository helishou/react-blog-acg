/*
 * @Author       : helishou
 * @Date         : 2021-08-14 23:48:59
 * @LastEditTime : 2021-08-18 19:00:20
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\utils\ismobli.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
export default function isMobileBrowser() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) === "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) === "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) === "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) === "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) === "android";
    var bIsCE = sUserAgent.match(/windows ce/i) === "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) === "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        return true;
    } else
        return false;
}
