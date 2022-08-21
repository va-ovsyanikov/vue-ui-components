<template>
  <div class="modal__settings">
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.modal {
  &__settings {
    position: absolute;
    top: 47px;
    right: 0;
    z-index: 3;
    width: 300px;
    z-index: 10;
    background-color: var(--white);
    border: 1px solid var(--border);
    box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.06);
    padding-bottom: 30px;
  }
}
</style>
