<template>
  <div class="product-box">
    <div class="container">
      <h2>手机</h2>
      <div class="wrapper">
        <div class="banner-left">
          <a :href="'/product/'+35">
            <img v-lazy="'/img/mix-alpha.jpg'" />
          </a>
        </div>
        <div class="list-box">
          <div class="list" v-for="(item, index) in phoneList" :key="index">
            <div class="item" v-for="(item, index) in item" :key="index">
              <span :class="{'new-pro': index%2===0}" v-if="index%2===0">新品</span>
              <span :class="{'kill-pro': index%2!==0}" v-else>秒杀</span>
              <div class="item-img">
                <img v-lazy="item.mainImage"/>
              </div>
              <div class="item-info">
                <h3>{{item.name}}</h3>
                <p>{{item.subtitle}}</p>
                <p class="price" @click="addCart(item.id)">{{item.price | currency}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductBox',
  data() {
    return {
      phoneList: [[1, 1, 1, 1], [1, 1, 1, 1]],
    };
  },
  mounted() {
    this.init();
  },
  filters: {
    currency(val) {
      if (val) {
        return `￥${val}元`;
      }
      return '0.00元';
    },
  },
  methods: {
    init() {
      this.axios.get('/products', {
        params: {
          categoryId: 100012,
          pageSize: 14,
        },
      }).then(res => {
        this.phoneList = [res.list.slice(6, 10), res.list.slice(10, 14)];
      });
    },
    addCart(id) {
      this.$emit('showMod');
      // this.axios.post('/carts', {
      //   productId: id,
      //   selected: true,
      // }).then(res => {

      // }).catch(() => {
      //   this.showModal = true;
      // });
    },
  },
};
</script>

<style lang="stylus" scoped>
.product-box
  background #F5F5F5
  padding 30px 0 50px
  .container
    width 1226px
    margin 0 auto
  h2
    font-size 22px
    height 21px
    line-height 21px
    color #333333
    margin-bottom 20px
  .wrapper
    display flex
    .banner-left
      margin-right 16px
      img
        width 224px
        height 619px
    .list-box
      .list
        display flex
        justify-content space-between
        width 986px
        margin-bottom 14px
        &:last-child
          margin-bottom 0
        .item
          width 236px
          height 302px
          background #ffffff
          text-align center
          span
            display inline-block
            width 67px
            height 24px
            line-height 24px
            color #ffffff
            font-size 14px
            &.new-pro
              background #7ECF68
            &.kill-pro
              background #E82626
          .item-img
            width 100%
            height 195px
            img
              width 100%
              height 195px
          .item-info
            h3
              font-size 14px
              color #333333
              line-height 14px
              font-weight bold
            p
              color #999999
              line-height 13px
              margin 6px auto 13px
            .price
              color #F20A0A
              font-size 14px
              font-weight bold
              cursor pointer
              &::after
                content ''
                display inline-block
                width 22px
                height 22px
                margin-left 5px
                background url('~assets/icon/icon-cart-hover.png') no-repeat center
                background-size contain
                vertical-align middle
</style>
