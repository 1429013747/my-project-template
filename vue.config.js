module.exports = {
  publicPath: "/", // 部署应用包时的基本 URL
  outputDir: "dist", // 打包生成的生产环境构建文件的目录
  assetsDir: "static", // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  indexPath: "index.html", // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  devServer: {
    proxy: {
      "/dev-blue": {
        target: "http://localhost:3000",
        ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {
          "^/dev-blue": "",
        },
        onProxyReq(proxyReq) {
          //proxyReq转字符串
          const key = Object.keys(proxyReq.agent.sockets);
          const port = key[0].match(/\d{4}/g);
          const { path, host, protocol } = proxyReq;
          console.log("===>>>", `${protocol}//${host + ":" + port + path}`);
        },
      },
    },
  },
  configureWebpack: (config) => {
    //区分环境
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      config.devtool = "none";
      // const plugins = [
      //   new CompressionPlugin({
      //     algorithm: "gzip", // 使用gzip压缩
      //     test: /\.js$|\.html$|\.css$/, // 匹配文件名
      //     filename: "[path].gz[query]", // 压缩后的文件名(保持原文件名，后缀加.gz)
      //     minRatio: 1, // 压缩率小于1才会压缩
      //     threshold: 10240, // 对超过10k的数据压缩
      //     deleteOriginalAssets: false, // 是否删除未压缩的源文件，谨慎设置，如果希望提供非gzip的资源，可不设置或者设置为false（比如删除打包后的gz后还可以加载到原始资源文件）
      //   }),
      // ];
    } else {
      //为开发环境修改配置...
      config.mode = "development";
      config.devtool = "source-map";
    }
    Object.assign(config.resolve.alias, {
      components: "@/components",
      content: "components/content",
      common: "components/common",
      assets: "@/assets",
      services: "@/services",
      pages: "@/pages",
    });
  },
  lintOnSave: true, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
};
