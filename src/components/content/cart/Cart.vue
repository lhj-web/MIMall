<template>
  <div>
    <order-header />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from '../../common/navBar/NavFooter.vue';
import OrderHeader from '../../common/navBar/OrderHeader.vue';

export default {
  components: { OrderHeader, NavFooter },
  name: 'Cart',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>

</style>
