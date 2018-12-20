// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护

console.log('beforeImport');

if (workbox) {
  console.log(`Yay! workbox is loaded 🎉`);
  // 通常项目中的 sw.js 源文件都是通过这样预留一个空数组的方式来预缓存内容列表的
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
}
else {
  console.log(`Boo! workbox didn't load 😬`);
}
