/*
 * @Author       : helishou
 * @Date         : 2021-08-14 20:46:47
 * @LastEditTime : 2021-08-14 22:00:19
 * @LastEditors  : helishou
 * @Description  :
 * @FilePath     : \src\utils\lazyload.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
export let picLazyLoad = function () {
  let observer = new IntersectionObserver((changes) => {
    changes.forEach((change) => {
      if (change.intersectionRatio > 0) {
        var img = change.target;
        img.src = img.getAttribute("lazyload");
        img.onload = () => {
          img.onload = null;
          img.setAttribute("class", "lazyload");
        };
        observer.unobserve(img);
      }
    });
  });
  Array.from(document.getElementsByClassName("loadimg")).forEach((item) => {
    observer.observe(item);
  });
};
