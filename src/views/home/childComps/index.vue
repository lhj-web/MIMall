<template>
  <div class="index">
    <div class="container">
      <swiper />
    </div>
    <service-bar />
  </div>
</template>

<script>
import ServiceBar from '../../../components/common/navBar/ServiceBar.vue';
import Swiper from '../../../components/content/swiper/Swiper.vue';

export default {
  components: { ServiceBar, Swiper },
  name: 'Index',
  data() {
    return {
    };
  },
};
</script>

<style lang="stylus" scoped></style>
