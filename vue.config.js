module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        components: '@/components',
        network: '@/network',
        router: '@/router',
        store: '@/store',
        views: '@/views',
        api: '@/api',
        storage: '@/storage',
        utils: '@/utils',
      },
    },
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
    },
  },
};
