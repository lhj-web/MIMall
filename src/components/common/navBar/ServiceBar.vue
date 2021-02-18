<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>七天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceBar',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/mixins.styl'
.service
  padding 33px 0
  color: #666666
  font-size 16px
  .container
    width 1126px
    margin 0 auto
    li
      display inline-block
      text-align center
      border-right 1px solid #E5E5E5
      width 24.9%
      span
        width 20px
        height 20px
        margin-right 5px
        vertical-align middle
      .icon-setting
        iconStyle('~assets/icon/icon-setting.png')
      .icon-7day
        iconStyle('~assets/icon/icon-7day.png')
      .icon-15day
        iconStyle('~assets/icon/icon-15day.png')
      .icon-post
        iconStyle('~assets/icon/icon-post.png')
</style>
