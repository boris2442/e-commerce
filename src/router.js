import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import UserSettings from "./pages/UserSettings.vue";
import WishList from "./pages/WishList.vue";
import ShoppingCart from "./pages/ShoppingCart.vue";
const routes = [
  {
    path: "/user-settings",
    component: UserSettings,
  },
  {
    path: "/wish-list",
    component: WishList,
  },
  {
    path: "/shopping-cart",
    component: ShoppingCart,
  },
  {
    path: "/",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
