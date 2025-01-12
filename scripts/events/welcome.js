hexo.on("ready", () => {
  const { version } = require("../../package.json");
  hexo.log.info(`Anzhiyun  ${version}`);
});
