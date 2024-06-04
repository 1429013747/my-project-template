module.exports = {
  configureWebpack: (config) => {
    config.devtool = "source-map";
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
