<template>
  <div class="nav-bar" :class="{isFixed}">
    <div class="container">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductParams',
  data() {
    return {
      isFixed: false,
    };
  },
  props: {
    title: String,
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight);
  },
  methods: {
    initHeight() {
      const scrollTop = document.documentElement.scrollTop || window.pageYOffset
       || document.body.scrollTop;
      this.isFixed = scrollTop > 152;
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight, false);
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/container.styl'
@import '~assets/css/stylus/btn.styl'
.isFixed
  width 100%
  position fixed
  top 0
  box-shadow: rgb(204 204 204) 0px 5px 5px;
  background #ffffff
  z-index 777
.nav-bar
  border-top 1px solid #E5E5E5
  .container
    display flex
    justify-content space-between
    align-items center
    line-height 70px
    .pro-title
      font-size 18px
      font-weight bold
    .pro-param
      font-size 14px
      a
        color #666
        margin 0 10px
        &:last-child
          margin 0
</style>
