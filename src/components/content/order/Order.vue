<template>
  <div>
    <order-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../../common/navBar/NavFooter.vue';
import OrderHeader from '../../common/navBar/OrderHeader.vue';

export default {
  components: { OrderHeader, NavFooter },
  name: 'Order',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>

</style>
