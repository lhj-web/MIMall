<template>
  <div class="modal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn">确定</a>
        <a href="javascript:;" class="btn">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {};
  },
  props: {
    // 弹窗类型 小 中 大 表单
    modalType: {
      type: String,
      default: 'form',
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
