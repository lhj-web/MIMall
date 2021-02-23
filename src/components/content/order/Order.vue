<template>
  <div>
    <order-header :title="title"><span>{{tip}}</span></order-header>
    <router-view />
    <service-bar />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../../common/navBar/NavFooter.vue';
import OrderHeader from '../../common/navBar/OrderHeader.vue';
import ServiceBar from '../../common/navBar/ServiceBar.vue';

export default {
  components: { OrderHeader, NavFooter, ServiceBar },
  name: 'Order',
  data() {
    return {
      title: '',
      tip: '',
    };
  },
  mounted() {
    const { path } = this.$route;
    if (path === '/order/confirm') {
      this.title = '订单确认';
      this.tip = '请认真填写收货地址';
    } else if (path === '/order/pay') {
      this.title = '订单支付';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    } else if (path === '/order/list') {
      this.title = '订单列表';
      this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
    }
  },
};
</script>

<style lang="stylus" scoped>

</style>
