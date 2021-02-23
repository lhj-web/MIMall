import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue');
const Index = () => import('views/home/childComps/Index.vue');
const Product = () => import('views/home/childComps/Product.vue');
const Detail = () => import('views/home/childComps/Detail.vue');
const Cart = () => import('components/content/cart/Cart.vue');
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
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
