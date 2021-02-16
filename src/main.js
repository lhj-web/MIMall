import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import App from './App.vue';
import env from './env';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.defaults.baseURL = env.baseURL;

axios.interceptors.response.use(response => {
  const res = response.data;
  if (res.status === 0) {
    return res.data;
  }
  if (res.status === 10) {
    window.location.href = '/login';
  } else {
    alert(res.msg);
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
