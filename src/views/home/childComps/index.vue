<template>
  <div class="index">
    <div class="container">
      <div class="nav-menu">
        <ul class="menu-wrap">
          <li class="menu-item">
            <a href="javascript:;">手机 电话卡</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">电视 盒子</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">笔记本 平板</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">家电 插线板</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">出行 穿戴</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">智能 路由器</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">电源 配件</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="menu-item">
            <a href="javascript:;">生活 箱包</a>
            <div class="children">
              <ul v-for="(item, index) in menuList" :key="index">
                <li v-for="(item, index) in item" :key="index">
                  <a :href="'/product'+item.id">
                    <img :src="item.img" />
                    {{item.name}}
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <swiper />
      <div class="ads-box">
        <a :href="'/product'+item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img" />
        </a>
      </div>
      <div class="banner">
        <a :href="'/product'+30">
          <img src="/img/banner-1.png" alt />
        </a>
      </div>
      <product-box />
    </div>
    <service-bar />
  </div>
</template>

<script>
import ServiceBar from '../../../components/common/navBar/ServiceBar.vue';
import ProductBox from '../../../components/content/Index/ProductBox.vue';
import Swiper from '../../../components/content/swiper/Swiper.vue';

export default {
  components: { ServiceBar, Swiper, ProductBox },
  name: 'Index',
  data() {
    return {
      menuList: [
        [
          {
            id: 30,
            img: '/img/box/item-box-1.png',
            name: '小米9CC9',
          },
          {
            id: 31,
            img: '/img/box/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/img/box/item-box-3.jpg',
            name: 'Redmi k20 Pro',
          },
          {
            id: 33,
            img: '/img/box/item-box-4.jpg',
            name: '4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/img/box/item-box-1.png',
            name: '小米9CC9',
          },
          {
            id: 31,
            img: '/img/box/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/img/box/item-box-3.jpg',
            name: 'Redmi k20 Pro',
          },
          {
            id: 33,
            img: '/img/box/item-box-4.jpg',
            name: '4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/img/box/item-box-1.png',
            name: '小米9CC9',
          },
          {
            id: 31,
            img: '/img/box/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/img/box/item-box-3.jpg',
            name: 'Redmi k20 Pro',
          },
          {
            id: 33,
            img: '/img/box/item-box-4.jpg',
            name: '4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/img/box/item-box-1.png',
            name: '小米9CC9',
          },
          {
            id: 31,
            img: '/img/box/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/img/box/item-box-3.jpg',
            name: 'Redmi k20 Pro',
          },
          {
            id: 33,
            img: '/img/box/item-box-4.jpg',
            name: '4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/img/box/item-box-1.png',
            name: '小米9CC9',
          },
          {
            id: 31,
            img: '/img/box/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/img/box/item-box-3.jpg',
            name: 'Redmi k20 Pro',
          },
          {
            id: 33,
            img: '/img/box/item-box-4.jpg',
            name: '4G专区',
          },
        ],
        [
          {
            id: 30,
            img: '/img/box/item-box-1.png',
            name: '小米9CC9',
          },
          {
            id: 31,
            img: '/img/box/item-box-2.png',
            name: '小米8青春版',
          },
          {
            id: 32,
            img: '/img/box/item-box-3.jpg',
            name: 'Redmi k20 Pro',
          },
          {
            id: 33,
            img: '/img/box/item-box-4.jpg',
            name: '4G专区',
          },
        ],
      ],
      adsList: [
        {
          id: 33,
          img: '/img/ads/ads-1.png',
        },
        {
          id: 48,
          img: '/img/ads/ads-2.jpg',
        },
        {
          id: 45,
          img: '/img/ads/ads-3.png',
        },
        {
          id: 47,
          img: '/img/ads/ads-4.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/mixins.styl'
.index
  .container
    .nav-menu
      position absolute
      left 146.6px
      width 264px
      height 451px
      z-index 666
      padding 26px 0
      box-sizing border-box
      background #55585a7a
      .menu-wrap
        .menu-item
          height 50px
          line-height 50px
          &:hover
            background #FF6600
            .children
              display block
          a
            position relative
            display block
            color #ffffff
            font-size 16px
            padding-left 30px
            &::after
              position absolute
              right 30px
              top 17.5px
              width 10px
              height 15px
              iconStyle('~assets/icon/icon-arrow.png')
              content ''
          .children
            position absolute
            left 264px
            top 0
            width 962px
            height 451px
            background #ffffff
            border 1px solid #E5E5E5
            display none
            ul
              display flex
              justify-content space-between
              height 75px
              li
                height 75px
                line-height 75px
                flex 1
                padding-left 23px
                z-index 666
                a
                  color #000000
                  font-size 14px
                  img
                    width 42px
                    height 35px
                    margin-right 15px
    .ads-box
      width 1226px
      display flex
      justify-content space-between
      margin 14px auto 31px
      a
        width 296px
        height 167px
        img
          width 100%
          height 100%
    .banner
      width 1226px
      margin 0 auto
      margin-bottom 50px
      img
        width 100%
</style>
