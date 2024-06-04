module.exports = {
  publicPath: "/",
  outputDir: "dist",
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        ws: true, // 是否启用websockets
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: {},
      },
    },
  },
  configureWebpack: (config) => {
    //区分环境
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      config.devtool = "none";
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
};
