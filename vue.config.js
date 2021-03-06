module.exports = {
  productionSourceMap: false,
  publicPath: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/global.scss";'
      }
    }
  },
  devServer: {
    port: '80',
    disableHostCheck: true,
    public: 'dev.lunacoding.com'
  }
}