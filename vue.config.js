module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@':src已经配置好了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    },

  }
}
