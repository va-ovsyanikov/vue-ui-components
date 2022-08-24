<template>
  <i :class="['icon',classIcon]" data-testid="icon"></i>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();
const classIcon = slots.default()[0].children;
</script>

<style lang="less" scoped></style>
