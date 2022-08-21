<template>
  <div class="list__item">
    <div class="list__item__left">
      <slot name="left"></slot>
    </div>
    <div class="list__item__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.list {
  &__item {
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    height: 44px;
    margin: 0 20px;
    &:last-child{
      border-bottom: none;
    }
    &__left,
    &__right {
      width: 50%;
      font-size: 16px;
      line-height: 24px;
      color: var(--gray-text);
    }
    &__left {
      font-weight: 600;
    }
    &__right {
      text-align: right;
      font-weight: 400;
    }
  }
}
.disabled {
  .list {
    &__item {
      &__left,
      &__right {
        color: var(--hints);
        pointer-events: none;
      }
    }
  }
}
</style>
