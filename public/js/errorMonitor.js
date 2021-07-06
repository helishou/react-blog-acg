window.onerror = function(message, source, lineno, colno, error) { 
    console.log(`****window.onerror****`)
    console.log('错误信息提示:',message)
    console.log('错误脚本地址:',source)//
    console.log('错误代码行号:',lineno)
    console.log('错误代码列号:',colno)
    console.log('错误的对象信息:',error)
    console.log(`************************`)
 }

 //捕获promise的unhandelerejection
 window.addEventListener('unhandledrejection',e=>{
     e.preventDefault()
     console.log('promise reject:',e.reason)
     return true
 })

 window.addEventListener('error',error=>{
     if(!error.message){
        console.log('网络资源加载错误',error)
     }
 },true)

 //页面不正常退出的错误收集
 window.addEventListener('load',()=>{
     sessionStorage.setItem('good_exit','pending')
 })

 window.addEventListener('beforeunload',()=>{
     sessionStorage.setItem('good_exit','true')
 })

 if(sessionStorage.getItem('good_exit')&&sessionStorage.getItem('good_exit')!=='true'){
     console.log('捕获到页面崩溃')
 }

 //框架信息错误处理
 const nativeConsoleError = window.console.error
 window.console.error  = (...args)=>nativeConsoleError.apply(this,[`I GOT ${args}`])

 //上报手法参考？sendBeacon，