<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/img/logo-footer.png">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://water6.ltd" target="_blank">个人博客主页</a><span>|</span>
      <a href="https://home.miui.com/" target="_blank">MUI</a><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
      <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
      <a href="https://www.duokan.com/" target="_blank">多看</a><span>|</span>
      <a href="https://game.xiaomi.com/" target="_blank">游戏</a><span>|</span>
    </div>
    <div class="copyright">Copyright ©2020 <span>https://water6.ltd</span> All Rights Reserved.</div>
  </div>
</template>

<script>
export default {
  name: 'NavFooter',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/variables.styl';
.footer
  height 234px
  border-top 4px solid colorA
  background #333333
  font-size 16px
  color colorD
  text-align center
  a
    color colorD
  .footer-logo
    margin-top 46px
    margin-bottom 31px
    img
      width 53px
      height 36px
      margin-bottom 13px
  .footer-link
    a
      display inline-block
    span
      margin 0 10px
  .copyright
    margin-top 13px
    span
      color colorA
</style>
