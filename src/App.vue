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
      res: {},
    };
  },
  mounted() {
    this.axios.get('/user/login').then(res => {
      this.res = res;
    });
  },
};
</script>

<style lang="stylus">
</style>
