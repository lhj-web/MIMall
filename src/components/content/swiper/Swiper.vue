<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <a href="#"><img :src="item" class="swiper-img" /></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import swiperImg1 from '/public/img/slider/slide-1.jpg';
import swiperImg2 from '/public/img/slider/slide-2.jpg';
import swiperImg3 from '/public/img/slider/slide-3.jpg';
import swiperImg4 from '/public/img/slider/slide-4.jpg';
import swiperImg5 from '/public/img/slider/slide-5.jpg';

export default {
  name: 'HomeSwipe',
  data() {
    return {
      banners: [swiperImg1, swiperImg2, swiperImg3, swiperImg4, swiperImg5],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          disableOnInteraction: false,
        },
        loop: true,
        effect: 'cube',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  width 1226px
  margin 0 auto
  overflow hidden
  height 0
  padding-bottom: 31.25%
  --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
  --swiper-navigation-color: #6D6875;/* 单独设置按钮颜色 */
  --swiper-navigation-size: 48px;/* 设置按钮大小 */
  .swiper-button-prev
    left 274px
  .swiper-img
    width 100%
    height 451px
</style>
