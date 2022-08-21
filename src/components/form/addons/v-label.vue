<template>
  <label
    :class="[
      'label',
      { focus: focus },
      { error: error },
      { disabled: disabled },
    ]"
    >{{ label }}<span v-if="required && label" class="label__required">*</span>
  </label>
</template>


<script setup>
const props = defineProps({
  required: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});
</script>


<style lang="less" scoped>
.label {
  color: var(--gray-text);
  font-size: 16px;
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
  &__required {
    color: var(--error);
  }
  &.focus {
    color: var(--primary);
  }
  &.error {
    color: var(--error);
  }
  &.disabled {
    color: var(--disabled);
  }
}
</style>
