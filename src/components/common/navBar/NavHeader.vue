<template>
  <div class="nav-header">
    <div class="navbar">
      <div class="container">
        <div class="navbar-menu">
          <a href="javascript:;" v-for="(item, index) in navMenu" :key="index">{{item}}</a>
        </div>
        <div class="navbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-else @click="login">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="cart" @click="goCart">
            <span class="icon-cart"></span>购物车({{cartCount}})
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
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in TV" :key="index">
                  <a href="/product/30" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.img">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a :href="'/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img v-lazy="item.mainImage">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
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
import { mapState } from 'vuex';
import navTVOne from '/public/img/nav-img/nav-3-1.jpg';
import navTVTwo from '/public/img/nav-img/nav-3-2.jpg';
import navTVThree from '/public/img/nav-img/nav-3-3.png';
import navTVFour from '/public/img/nav-img/nav-3-4.jpg';
import navTVFive from '/public/img/nav-img/nav-3-5.jpg';
import navTVSix from '/public/img/nav-img/nav-3-6.png';

export default {
  name: 'NavHeader',
  data() {
    return {
      navMenu: ['小米商城', 'MUI', '云服务', '协议规则'],
      phoneList: [],
      TV: [
        { name: '小米壁画电视 65寸', price: '￥6999.00元', img: navTVOne },
        { name: '小米全面屏电视E55A', price: '￥1999.00元', img: navTVTwo },
        { name: '小米电视4A 32寸', price: '￥699.00元', img: navTVThree },
        { name: '小米电视4A 55寸', price: '￥1799.00元', img: navTVFour },
        { name: '小米电视4A 65寸', price: '￥2699.00元', img: navTVFive },
        { name: '查看全部', price: '查看全部', img: navTVSix },
      ],
    };
  },
  mounted() {
    this.getProductList();
  },
  computed: {
    ...mapState(['username', 'cartCount']),
  },
  filters: {
    currency(val) {
      if (!val) {
        return '0.00';
      }
      return `￥${val.toFixed(2)}元`;
    },
  },
  methods: {
    login() {
      this.$router.push('/login');
    },
    getProductList() {
      this.axios.get('/products', {
        params: {
          categoryId: '100012',
        },
      }).then(res => {
        if (res.list.length > 6) {
          this.phoneList = res.list.slice(0, 6);
        }
      });
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res);
      });
    },
    goCart() {
      this.$router.push('/cart');
    },
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
          margin-right 0
          .icon-cart
            width 16px
            height 12px
            margin-right 4px
            iconStyle('~assets/icon/icon-cart-checked.png')
  .header
    .container
      position relative
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
        width 643px
        padding-left 209px
        .item-menu
          display inline-block
          font-weight bold
          font-size 16px
          line-height 112px
          margin-right 20px
          span
            cursor pointer
          &:hover
            color colorA
            .children
              height 220px
              opacity 1
          .children
            position absolute
            top 112px
            left 0
            width 1226px
            height 0
            border 1px solid #E5E5E5
            background #ffffff
            overflow hidden
            box-shadow 0 7px 6px 0 rgba(0, 0, 0, .11)
            opacity 0
            transition height .5s
            z-index 777
            .product
              position relative
              float left
              width 16.6%
              font-size 12px
              line-height 12px
              text-align center
              &::after
                content ''
                position absolute
                top 28px
                right 0
                border-right 1px solid colorF
                width 1px
                height 100px
              &:last-child::after
                display none
              a
                display inline-block
                .pro-img
                  height 137px
                  img
                    width auto
                    height 111px
                    margin-top 26px
                .pro-name
                  font-weight bold
                  margin-top 19px
                  margin-bottom 8px
                  color #333333
                .pro-price
                  color colorA
      .header-search
        width 317px
        .wrapper
          height 50px
          border 1px solid borderCorlor
          display flex
          align-items center
          input
            border-right 1px solid borderCorlor
            width 264px
            height 50px
            padding-left 14px
            box-sizing border-box
          a
            width 18px
            height 18px
            iconStyle('~assets/icon/icon-search.png')
            margin-left 17.5px
</style>
