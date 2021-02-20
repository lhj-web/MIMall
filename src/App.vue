<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from 'storage/index';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  mounted() {
    if (this.$cookie.userId) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username);
      });
    },
    getCartCount() {
      this.axios.get('/cart/products/sum').then((res = {}) => {
        this.$store.dispatch('saveCartCount', res);
      });
    },
  },
};
</script>

<style lang="stylus">
@import '~assets/css/stylus/btn.styl'
</style>
