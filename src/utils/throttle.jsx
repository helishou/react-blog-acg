/*
 * @Author       : helishou
 * @Date         : 2021-09-13 18:48:41
 * @LastEditTime : 2021-11-01 15:49:39
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : \src\utils\throttle.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const throttle=(fnc,timing=500,delay=100)=>{
    let timer=null
    let startTime=Date.now()
    return function(...args){
        let curTime=Date.now()
        let that=this
        clearTimeout(timer);
        if(curTime-startTime<timing){
            timer=setTimeout(()=>{
                fnc.apply(that,args)
            },delay)
        }else{
            fnc.apply(that,args)
            startTime=curTime
        }
    }
}
export default throttle