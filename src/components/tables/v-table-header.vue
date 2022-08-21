<template>
  <div class="table__header">
    <slot name="left"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.table {
  &__header {
    height: 48px;
    border: 1px solid var(--border);
    border-bottom: none;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;
  }
}
</style>
