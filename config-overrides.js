/*
 * @Author       : helishou
 * @Date         : 2021-07-15 09:44:09
 * @LastEditTime : 2021-08-13 13:55:41
 * @LastEditors  : helishou
 * @Description  : webpack配置
 * @FilePath     : \config-overrides.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const path = require('path');
// 除了单独定义一个功能函数你还可以使用
// customize-cra提供的addWebpackPlugin来添加插件
const addConfigPlugin = config => {
    // 在这里我们还可以很方便的对config扩展别的配置项
    /*预渲染选项
    if(process.env.NODE_ENV === 'production') {
        config.plugins = config.plugins.concat([
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, '../build'),
                routes: ['/'],
                renderer: new PrerenderSPAPlugin.PuppeteerRenderer({//这样写renderAfterTime生效了
                  renderAfterTime: 5000
                })
              })
        ]);
    }预渲染选项*/
    return config
}
// 我的理解override函数的本质还是处理config对象并返回
module.exports =  override(
    addConfigPlugin,
    // 这里是按需加载antd
    // fixBabelImports('import', {        
    //     libraryName: 'antd',        
    //     libraryDirectory: 'es',       
    //     style: 'css'
    // })
    addWebpackAlias(
        {
            '@': path.resolve(__dirname, 'src')
        }
    )
)
