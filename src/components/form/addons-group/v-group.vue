<template>
  <v-label :error="error" :focus="focus" :required="required" :label="label" :disabled="disabled"></v-label>
  <slot></slot>
  <v-note :noteMessage="noteMessage" :errorMessage="errorMessage"></v-note>
</template>


<script setup>
import vLabel from '../addons/v-label.vue'
import vNote from '../addons/v-note.vue'
const props = defineProps({
  error: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  focus: {
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
  errorMessage: {
    type: String,
    default: "",
  },
  noteMessage: {
    type: String,
    default: "",
  },
});
</script>

