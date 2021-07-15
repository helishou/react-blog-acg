/*
 * @Author       : helishou
 * @Date         : 2021-07-15 15:18:12
 * @LastEditTime : 2021-07-15 15:55:03
 * @LastEditors  : helishou
 * @Description  : 大图预加载
 * @FilePath     : \src\utils\preload.ts
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
/**
 * @description : 预加载图片
 * @param        {string} url
 * @param        {Function} callback
 * @return       {*}
 */
// export default
const preload = (function (): any {
  let imgArray = new Map();
  return (url: string, callback?: Function) => {
    if (imgArray.has(url)) {
      callback && callback(imgArray.get(url));
      return;
    }
    // console.log(imgArray)
    let newImgUrl: string = "";
    if (url.indexOf("small") > 0) {
      newImgUrl = url.replace("small", "");
      newImgUrl = newImgUrl.slice(0, newImgUrl.length - 19) + ".jpg.webp";
      // console.log(newImgUrl)
      const img = new Image();
      img.src = newImgUrl;
      img.onload = () => {
        imgArray.set(url, newImgUrl);
        img.onload = null;
        callback && callback(newImgUrl);
      };
    }
  };
})();
export default preload;
