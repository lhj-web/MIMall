<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/index"></a>
      </div>
      <div class="header-title">
        <h2>
          {{title}}
          <slot></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OrderHeader',
  data() {
    return {};
  },
  props: {
    title: String,
  },
  computed: {
    ...mapState(['username', 'cartCount']),
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/variables.styl'
@import '~assets/css/stylus/base.styl'
.order-header
  padding 30px 0
  .header-logo
    float left
  .header-title, .username
    display inline-block
    height 55px
    line-height 55px
  .header-title
    font-size 28px
    float left
    color #333333
    margin-left 54px
    span
      font-size 14px
      margin-left 17px
      color #999999
      font-weight bold
  .username
    float right
    a
      font-size 16px
      color #666666
</style>
