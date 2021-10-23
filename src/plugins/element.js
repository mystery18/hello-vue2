// 记得要引入Vue
import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css';
import { Button, Row, Progress, Carousel, CarouselItem, Popover, Table, TableColumn, Loading, Pagination, Card, Tree } from 'element-ui';
Vue.use(Button)
Vue.use(Row)
Vue.use(Progress)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Popover)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)
Vue.use(Pagination)
Vue.use(Card)
Vue.use(Tree);

// const loading = Loading.service(options);
// let loadingInstance = Loading.service({
//   lock: true,
//   fullscreen: true
// });
// setTimeout(function () {
//   loadingInstance.close();
// },2000)

// 我觉得是要在原型上挂载loading，这样各个路由组件才能用
// Vue.prototype.openLoading = function () {
//   const loading = Loading.service({
//     lock: true,
//     fullscreen: true
//   })
//   return loading
// }
