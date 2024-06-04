module.exports = {
  publicPath: "/",
  outputDir: "dist",
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
