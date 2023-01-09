<template>
  <div
    :class="addClass"
  >
    <v-group
      :error="error"
      :label="label"
      :disabled="disabled"
      :noteMessage="noteMessage"
      :errorMessage="errorMessage"
      :focus="focus"
      :required="required"
    >
      <textarea
        class="field textarea__field"
        :placeholder="placeholder"
        :value="modelValue"
        @focus="focus = true"
        @blur="focus = false"
        @input="updateValue($event.target.value)"
      ></textarea>
    </v-group>
  </div>
</template>


<script setup>
import { ref, computed } from "vue";
import vGroup from '../addons-group/v-group.vue'
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
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
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
});

// class
const addClass = computed(()=>{
	return {
		'textarea':true,
    'focus': focus.value,
    'error': props.error,
    'disabled': props.disabled,
	}
})


//focus
const focus = ref(false);

//emit
const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>


<style lang="less" scoped>
.textarea {
  &__field {
    min-height: 120px;
    resize: none;
    padding: 10px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    line-height: 20px;
    display: block;
    color: var(--gray-text);
  }
}
.focus {
  .textarea__field {
    border: 1px solid var(--primary);
    outline: 0;
  }
}
.error {
  .textarea__field {
    border: 1px solid var(--error);
  }
}
.disabled {
  .textarea__field {
    pointer-events: none;
    color: var(--disabled);
    &::-webkit-input-placeholder {
      color: var(--disabled);
    }
    &::-moz-placeholder {
      color: var(--disabled);
    }
    &:-moz-placeholder {
      color: var(--disabled);
    }
    &:-ms-input-placeholder {
      color: var(--disabled);
    }
  }
}
</style>
