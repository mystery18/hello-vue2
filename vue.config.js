// vue.config.js
// 如果在这里有自己这样的配置，到时候会将这个配置和公共的配置合并的
module.exports = {
  configureWebpack: {
      // resolve 解决路径相关的问题
      resolve: {
          // extension: [], // 有些路径的别名就可以不写了，后缀名就可以不写了（但它默认已经配了：.vue .json .js）
          
          // 最主要是这个 别名
          alias: {
              'assets': '@/assets',
              'common': '@/common',
              'components': '@/components',
              'network': '@/network',
              'views': '@/views',
              'plugins': '@/plugins'
          }
      }
  }
  
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8081/', // 接口域名
  //       changeOrigin: true // 把请求头中的host配置为 target
  //     }
  //   }
  // }
}