// 根据主题动态返回不同的图片
// /Users/dong4j/Developer/3.Knowledge/site/hexo/themes/anzhiyu/layout/includes/page/about.pug
hexo.extend.helper.register("xxx", function (type) {
  if (hexo.config.darkmode.enable) {
    return "https://blog-1258270892.cos.ap-chengdu.myqcloud.com/source/image/20250104212459_bX6bH12g.webp";
  } else {
    return "https://blog-1258270892.cos.ap-chengdu.myqcloud.com/source/image/20250104212916_NmPboUM8.webp";
  }
});
