/*
 * @Author       : helishou
 * @Date         : 2021-07-15 15:18:12
 * @LastEditTime : 2021-07-15 18:13:47
 * @LastEditors  : helishou
 * @Description  : 大图预加载
 * @FilePath     : d:\desk\sakura\react-blog-acg\src\utils\preload.ts
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
/**
 * @description : 闭包实现预加载图片
 * @param        {string} url
 * @param        {Function} callback
 * @return       {*}
 */
const preload = (function (): any {
  let imgArray = new Map();//表示该图是否加载过
  let doing = false //表示任务是否在执行
  let nextImg ='' //表示接下来要预加载的图
  return (url: string, callback?: Function) => {
    //如果该图已家在过，直接返回回调
    if (imgArray.has(url)) {
      console.log('如果该图已家在过，直接返回回调')
      callback && callback(imgArray.get(url));
      return;
    }
    //封装一下加载图片的函数
    const loadImg=(url:string,callback?:Function)=>{
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
          if(callback){
            callback(newImgUrl);
          }else{
            if(nextImg!==''){
              console.log('加载下一张')
              loadImg(nextImg)
              nextImg=''
            }else{
              console.log('加载完了')
              doing=false
            }
          }
        };
      }
    }
    //有callback说明是文章详情页的加载，优先并行处理
    if(callback){
      console.log('有callback说明是文章详情页的加载，优先并行处理')
      loadImg(url,callback)
      return
    }
    //如果已经在加载了,就插队
    if(doing){
      console.log('//如果已经在加载了,就插队')
      nextImg = url
    }else{
      //没在加载
      console.log('//没在加载')
      loadImg(url,callback)
      doing=true
    }
  };
})();
export default preload;
