/*
 * @Author       : helishou
 * @Date         : 2021-07-15 15:18:12
 * @LastEditTime : 2021-07-16 00:22:14
 * @LastEditors  : helishou
 * @Description  : 大图预加载
 * @FilePath     : \src\utils\preload.ts
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
/**
 * @description : 闭包实现预加载图片
 * @param        {string} url - 网址
 * @param        {Function} callback - 回调
 * @return       {*}
 */
const preload = (function (): any {
  let imgArray = new Map();//表示该图是否加载过
  let doing = false //表示任务是否在执行
  let nextImg ='' //表示接下来要预加载的图
  return (url: string, callback?: Function) => {
    //懒加载文章组件
    require("../pages/article")
    if (imgArray.has(url)) {
      //console.log('如果该图已加载过，直接返回回调')
      callback && callback(imgArray.get(url));
      return;
    }
    //封装一下加载图片函数
    const loadImg=(url:string,callback?:Function)=>{
      let newImgUrl: string = "";
      if (url?.indexOf("small") > 0) {
        doing=true
        newImgUrl = url.replace("small", "");
        newImgUrl = newImgUrl.slice(0, newImgUrl.length - 19) + ".jpg.webp";
        // //console.log(newImgUrl)
        const img = new Image();
        img.src = newImgUrl;
        img.onload = () => {
          imgArray.set(url, newImgUrl);
          img.onload = null;
          if(callback){
            callback(newImgUrl);
          }else{
            if(nextImg!==''){
              //console.log('加载下一张')
              loadImg(nextImg)
              nextImg=''
            }else{
              //console.log('加载完了')
              doing=false
            }
          }
        };
      }
    }
    if(callback){
      //console.log('有callback说明是文章详情页的加载，优先并行处理')
      loadImg(url,callback)
      return
    }
    if(doing){
      //console.log('//如果已经在加载了,就插队,因为永远是最后的那个最优先')
      nextImg = url
    }else{
      //console.log('//没在加载')
      loadImg(url,callback)
    }
  };
})();
export default preload;