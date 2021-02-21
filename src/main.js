import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyload from 'vue-lazyload';
import VueCookie from 'vue-cookie';
import router from './router';
import store from './store';
import App from './App.vue';
// import env from './env';
import 'assets/css/reset.css';
import 'swiper/css/swiper.css';

// const mock = true;
// if (mock) {
//   require('./mock/api');
// }

Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  loading: '/img/loading-svg/loading-bars.svg',
});
Vue.use(VueCookie);
Vue.config.productionTip = false;

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// axios.defaults.baseURL = env.baseURL;

axios.interceptors.response.use(response => {
  const res = response.data;
  const path = window.location.pathname;
  if (res.status === 0) {
    return res.data;
  }
  if (res.status === 10) {
    if (path !== '/index') {
      window.location.href = '/login';
    }
  } else {
    alert(res.msg);
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
