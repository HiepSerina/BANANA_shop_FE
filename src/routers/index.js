import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Market from "../views/Market.vue";
import News from "../views/News.vue"
import DetailItem from "../components/layout/market/detail-item/DetailItem.vue"
import CartVue from "../views/CartVue.vue"

const routers = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/market",
    component: Market,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/detail/:id",
    component: DetailItem,
    props: true,
  },
  {
    path: "/cart",
    component: CartVue,
  }
];

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default vueRouter;
