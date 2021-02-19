<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancle')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a
            href="javascript:;"
            class="btn"
            v-if="btnType==='1'"
            @click="$emit('submit')"
          >{{confirmText}}</a>
          <a
            href="javascript:;"
            class="btn"
            v-else-if="btnType==='2'"
            @click="$emit('cancle')"
          >{{cancleText}}</a>
          <div class="btn-group" v-else>
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{confirmText}}</a>
            <a href="javascript:;" class="btn-default" @click="$emit('cancle')">{{cancleText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {};
  },
  props: {
    // 弹窗类型 小small 中middle 大large 表单form
    modalType: {
      type: String,
      default: 'form',
    },
    title: String,
    // 按钮类型
    btnType: String,
    confirmText: {
      type: String,
      default: '确定',
    },
    cancleText: {
      type: String,
      default: '取消',
    },
    showModal: Boolean,
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/stylus/mixins.styl'
.modal
  z-index 777
  modalPosition(fixed)
  transition top 0.5s
  &.slide-enter-active
    top 0
  &.slide-enter
    top -100%
  &.slide-leave-active
    top -100%
  .mask
    modalPosition(fixed)
    background #000000
    opacity 0.5
  .modal-dialog
    modalPosition(absolute, 40%, 50%, 660px, auto)
    background #ffffff
    transform translate(-50%, -50%)
    .modal-header
      height 60px
      line-height 60px
      font-size 16px
      background #F5F5F5
      padding 0 25px
      .icon-close
        position absolute
        top 23px
        right 25px
        width 14px
        height 14px
        background url('~assets/icon/icon-close.png') no-repeat center
        background-size contain
        transition transform 0.3s
        &:hover
          transform scale(1.5)
    .modal-body
      padding 42px 40px 54px
      font-size 14px
    .modal-footer
      height 82px
      line-height 82px
      text-align center
      background #F5F5F5
</style>
