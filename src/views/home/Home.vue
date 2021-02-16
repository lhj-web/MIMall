<template>
  <div>
    <nav-header />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from 'components/common/navBar/NavHeader.vue';
import NavHeader from 'components/common/navBar/NavFooter.vue';

export default {
  components: { NavHeader, NavFooter },
  name: 'Home',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>

</style>
