<template>
  <div class="nav-header">
    <div class="navbar">
      <div class="container">
        <div class="navbar-menu">
          <a href="javascript:;" v-for="(item, index) in navMenu" :key="index">{{item}}</a>
        </div>
        <div class="navbar-user">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">注册</a>
          <a href="javascript:;" class="cart">
            <span class="icon-cart"></span>购物车(0)
          </a>
        </div>
      </div>
    </div>
    <div class="header">
      <div class="container">
        <div class="header-logo">
          <a href="/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu" v-for="(item, index) in headerMenu" :key="index">
            <span>{{item}}</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavHeader',
  data() {
    return {
      navMenu: ['小米商城', 'MUI', '云服务', '协议规则'],
      headerMenu: ['小米手机', 'Redmi红米', '电视'],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/variables.styl'
@import '~assets/css/stylus/mixins.styl'
.nav-header
  .navbar
    height 39px
    line-height 39px
    background-color #333333
    .container
      centered()
      a
        color #B0B0B0
        display inline-block
        margin-right 17px
      .navbar-user
        .cart
          width 110px
          text-align center
          background colorA
          color #ffffff
          .icon-cart
            display inline-block
            width 16px
            height 12px
            background url('~assets/icon/icon-cart.png') no-repeat center
            background-size contain
            margin-right 4px
  .header
    .container
      centered()
      height 112px
      .header-logo
        background colorA
        display inline-block
        width 55px
        height 55px
        a
          display inline-block
          width 110px
          &::before
            pseudo-element('/img/mi-logo.png')
            transition margin .2s
          &::after
            pseudo-element('/img/mi-home.png')
          &:hover::before
            margin-left -55px
            transition margin .2s
      .header-menu
        padding-left 209px
        .item-menu
          display inline-block
          font-weight bold
          font-size 16px
          line-height 112px
          margin-right 20px
          span
            cursor pointer
          // &:hover
      .header-search
        width 317px
        .wrapper
          height 50px
          border 1px solid borderCorlor
          display flex
          align-items center
          input
            border none
            border-right 1px solid borderCorlor
            width 264px
            height 50px
            padding-left 14px
</style>
