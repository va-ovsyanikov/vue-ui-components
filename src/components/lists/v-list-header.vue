<template>
  <div class="list__header">
    <slot></slot>
  </div>
</template>
<script setup>
import vIcon from "../icons/v-icon.vue";
</script>
<style lang="less">
.list {
  &__header {
    height: 50px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    .icon {
      font-size: 30px;
      margin-left: 23px;
      color: var(--primary);
    }
    h4 {
      font-weight: 600;
      font-size: 20px;
      margin-left: 15px;
      color: var(--primary);
    }
  }
}
.disabled {
  &.list {
    border: 1px solid var(--hints);
  }
  .list {
    &__header {
      .icon {
        color: var(--hints);
      }
      h4 {
        color: var(--hints);
      }
    }
  }
}
</style>
