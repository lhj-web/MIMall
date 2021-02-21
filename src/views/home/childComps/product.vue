<template>
  <div class="product">
    <product-params :title="product.name">
      <a href="javascript:;" class="btn">立即购买</a>
    </product-params>
    <div class="content">
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href="javascript:;">全国收款双频 GP</a>
          <span>|</span>
          <a href="javascript:;">骁龙845</a>
          <span>|</span>
          <a href="javascript:;">AI变焦双摄</a>
          <span>|</span>
          <a href="javascript:;">红外人脸识别</a>
          <span>|</span>
        </p>
        <div class="price">{{product.price | currency}}</div>
      </div>
      <div class="item-bg1"></div>
      <div class="item-bg2"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
          <swiper-slide>
            <img src="/img/product/gallery-2.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/img/product/gallery-3.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/img/product/gallery-4.png" />
          </swiper-slide>
          <swiper-slide>
            <img src="/img/product/gallery-5.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="/img/product/gallery-6.jpg" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>
          60帧超慢动作摄影
          <br />慢慢回味每一瞬间的精彩
        </h2>
        <p>
          后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！
          <br />更能AI 精准分析视频内容，15个场景智能匹配背景音效。
        </p>
        <div class="video-bg" @click="showSlide='slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" v-bind:class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video src="/img/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParams from '../../../components/content/Index/ProductParams.vue';

export default {
  components: { ProductParams },
  name: 'Product',
  data() {
    return {
      showSlide: '',
      product: {},
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: true,
        slidesPerView: 3, // 显示个数
        spaceBetween: 30, // slide间隙
        freeMode: true, // 拖动可滑动多格
      },
    };
  },
  mounted() {
    this.getProductInfo();
  },
  filters: {
    currency(val) {
      if (val) {
        return `￥${val}元`;
      }
      return '￥0.00元';
    },
  },
  methods: {
    getProductInfo() {
      const { id } = this.$route.params;
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res;
      });
    },
    closeVideo() {
      this.showSlide = 'slideUp';
      setTimeout(() => {
        this.showSlide = '';
      }, 600);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/mixins.styl'
.product
  .content
    .item-bg
      background url('/img/product/product-bg-1.png') no-repeat center
      height 718px
      text-align center
      h2
        font-weight bold
        font-size 80px
        padding-top 55px
      h3
        font-size 24px
        letter-spacing 10px
      p
        margin-top 21px
        margin-bottom 40px
        a
          color #333333
          font-size 16px
        span
          margin 0 15px
      .price
        font-size 30px
        color #333333
    .item-bg1
      background url('/img/product/product-bg-2.png') no-repeat center
      height 480px
      background-size 1226px 397px
    .item-bg2
      background url('/img/product/product-bg-3.png') no-repeat center
      height 638px
      background-size cover
    .item-swiper
      margin 36px auto 52px
      .desc
        font-size 18px
        color #333333
        text-align center
      img
        width 100%
    .item-video
      height 1044px
      background-color #070708
      margin-bottom 76px
      color #FFFFFF
      text-align center
      h2
        font-size 60px
        padding-top 82px
        margin-bottom 47px
      p
        font-size 24px
        margin-bottom 58px
      .video-bg
        background url('/img/product/gallery-1.png') no-repeat center
        background-size cover
        width 1226px
        height 540px
        margin 0 auto 120px
        cursor pointer
      .video-box
        .overlay
          modalPosition(fixed)
          background-color #333333
          opacity 0.4
          z-index 10
        @keyframes slideDown
          from
            top -50%
            opacity 0
          to
            top 50%
            opacity 1
        @keyframes slideUp
          from
            top 50%
            opacity 1
          to
            top -50%
            opacity 0
        .video
            position:fixed;
            top:-50%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:10;
            width:1000px;
            height:536px;
            opacity:1;
            &.slideDown
              animation:slideDown .6s linear;
              top:50%;

            &.slideUp
              animation:slideUp .6s linear;

            .icon-close
              position:absolute;
              top:20px;
              right:20px;
              iconStyle('~assets/icon/icon-close.png')
              width 20px
              height 20px
              cursor:pointer;
              z-index:11;

            video
              width:100%;
              height:100%;
              object-fit:cover;
              outline:none;

</style>
