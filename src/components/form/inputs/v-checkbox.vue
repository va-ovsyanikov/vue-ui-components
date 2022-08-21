<template>
  <div :class="['checkbox', { checked: modelValue === trueValue }]">
    <label class="checkbox__label">
      <input
        class="checkbox__field"
        :value="modelValue"
        type="checkbox"
        :checked="modelValue === trueValue"
        @change="onChange"
      />
      <span v-if="label" class="checkbox__label__text">{{label}}</span>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
  trueValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  falseValue: {
    type: [String, Number, Boolean],
    default: false,
  },
  label:{
    type:String,
    default: ""
  }
});

//emit
const emit = defineEmits(["update:modelValue"]);
const onChange = () => {
  if (props.modelValue === props.trueValue) {
    emit("update:modelValue", props.falseValue);
  } else {
    emit("update:modelValue", props.trueValue);
  }
};
</script>

<style lang="less" scoped>
.checkbox {
  &__field {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &__label {
    display: flex;
    &::before {
      content: "";
      display: block;
      height: 18px;
      width: 18px;
      background-image: url("../../../assets/img/Vector.svg");
    }
    &__text {
      font-size: 14px;
      color: var(--hints);
      padding-left: 10px;
      cursor: pointer;
      position: relative;
      top:-2px;
    }
  }
}
.checked {
  .checkbox {
    &__label {
      &::before {
        content: "";
        display: block;
        height: 18px;
        width: 18px;
        background-image: url("../../../assets/img/Checkbox.svg");
        background-position: 50% 50%;
      }
    }
  }
}
</style>
