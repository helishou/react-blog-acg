## 迁移遇到的问题

### 之前用require加载静态资源，使用vite出错。

解决办法：
使用 New URL 参考：https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url

### 加载不了本地.cur文件
也找不到插件
解决办法:
传到阿里云，用链接加载

### 正向代理失效 

解决办法：
vite.config.js添加配置
‘’‘
    server: {
        proxy: {
            '/api': {
                target: 'http://47.98.154.142/',
                changeOrigin: true,
            },
        },
    },
    ’‘’

### global underfined

解决办法：在index.html里面加script 
global=globalThis

### react-loadable 失效
解决办法：移除react-loadable。
使用react.lazyload

### 打包上线后出现invalid URL错误
看错误是
```
export function getStaticUrl(name) {
  return new URL('./assets/images/'+name, import.meta.url).href
}
```
参考https://www.zhihu.com/question/472668669
这一段的问题。
尝试改成
export function getStaticUrl(name) {
  return new URL('@/assets/images/'+name, import.meta.url).href
}
无效
参考https://github.com/vitejs/vite/issues/7647
解决
都改为import解决
也可以用new URL返回静态资源解决，但是无法兼容webpack，所以不推荐

### 打包上线后出现invalid URL错误
require is not defined
发现antd很多包都是require引入
解决起来比较麻烦，不如webpack打包。
