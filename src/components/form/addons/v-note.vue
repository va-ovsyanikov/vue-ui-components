<template>
  <p class="explain note" v-if="noteMessage">
    <v-icon class="explain__icon">ci-error_outline</v-icon>
    {{ noteMessage }}
  </p>
  <p class="explain error" v-if="errorMessage">
    <v-icon class="explain__icon">ci-error_outline</v-icon>
    {{ errorMessage }}
  </p>
</template>

<script setup>
import vIcon from "../../icons/v-icon.vue";
const props = defineProps({
  noteMessage: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less" scoped>
.explain {
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  margin-top: 5px;
  display: flex;
  &__icon {
    margin-right: 5px;
    margin-top: 1px;
  }
  &.note {
    color: var(--title);
  }
  &.error {
    color: var(--error);
  }
}
</style>
