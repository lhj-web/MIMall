import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue');
const Index = () => import('views/home/childComps/Index.vue');
const Product = () => import('views/home/childComps/Product.vue');
const Detail = () => import('views/home/childComps/Detail.vue');
const Cart = () => import('components/content/cart/Cart.vue');
const Order = () => import('components/content/order/Order.vue');
const OrderConfirm = () => import('components/content/order/OrderConfirm.vue');
const Login = () => import('components/common/login/Login.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index,
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: Product,
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children: [
      {
        path: 'confirm',
        name: 'Confirm',
        component: OrderConfirm,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
