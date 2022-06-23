## 迁移遇到的问题

### 之前用require加载静态资源，使用vite出错。

解决办法：
使用 New URL 参考：https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url

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