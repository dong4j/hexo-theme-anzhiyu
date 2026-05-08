/**
 * AnZhiYu
 * lazyload
 * replace src to data-lazy-src
 */

"use strict";

const urlFor = require("hexo-util").url_for.bind(hexo);

const lazyload = htmlContent => {
  const error_img = hexo.theme.config.error_img.post_page
  // 默认占位图需要携带接近正文图片的宽高比例，避免 1x1 透明图导致懒加载时版面突然撑开。
  const defaultPlaceholder =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f4f6fb'/%3E%3Cstop offset='1' stop-color='%23e8edf6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1280' height='720' rx='24' fill='url(%23g)'/%3E%3Cpath d='M0 560 220 420l160 96 210-220 250 248 160-120 280 164v132H0z' fill='%23d9e1ee'/%3E%3Ccircle cx='980' cy='210' r='72' fill='%23d2dbea'/%3E%3C/svg%3E";
  const bg = hexo.theme.config.lazyload.placeholder
    ? urlFor(hexo.theme.config.lazyload.placeholder)
    : defaultPlaceholder;
  return htmlContent.replace(
    /(<img(?!.class[\t]*=[\t]*['"].*?nolazyload.*?['"]).*? src=)/gi,
    `$1 "${bg}" onerror="this.onerror=null,this.src=&quot;${error_img}&quot;" data-lazy-src=`
  );
}

hexo.extend.filter.register('after_render:html', data => {
  const { enable, field } = hexo.theme.config.lazyload
  if (!enable || field !== 'site') return
  return lazyload(data)
})

hexo.extend.filter.register('after_post_render', data => {
  const { enable, field } = hexo.theme.config.lazyload
  if (!enable || field !== 'post') return
  data.content = lazyload(data.content)
  return data
})
