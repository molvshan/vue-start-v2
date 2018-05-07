export let arr = [];
export function filterRouter(router, name) {
  for (let i = 0; i < router.length; i++) {
    if (router[i].name === name) {
      arr = [router[i]];
      break;
    } else if (router[i].children && router[i].children.length > 0) {
      filterRouter(router[i].children, name);
    }
  }
}
