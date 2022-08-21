<template>
  <div :class="['input', { error: error }, { focus: focus }]">
    <v-group
      :error="error"
      :required="required"
      :label="label"
      :errorMessage="errorMessage"
      :noteMessage="noteMessage"
      :focus="focus"
    >
      <div class="input__wrap">
        <v-icon v-if="prependIcon" class="input__icon__prepend">{{
          prependIcon
        }}</v-icon>
        <input
          ref="input"
          type="text"
          class="field input__field"
          :placeholder="placeholder"
          :value="modelValue"
          @blur="focus = false"
          @focus="focus = true"
          @input="updateValue($event.target.value)"
        />
        <v-icon
          v-if="clearable"
          class="input__icon__append"
          @click="clear"
          >{{ appendIcon }}</v-icon
        >
        <v-icon v-else-if="appendIcon" class="input__icon__append">{{
          appendIcon
        }}</v-icon>
      </div>
    </v-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vGroup from "../addons-group/v-group.vue";
import vIcon from "../../icons/v-icon.vue";
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  clearable: {
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
  placeholder: {
    type: String,
    default: "",
  },
  prependIcon: {
    type: String,
    default: "",
  },
  appendIcon: {
    type: String,
    default: "",
  },
});

//focus variable
let focus = ref(false);

//emit
const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => {
  emit("update:modelValue", value);
};

//clear input
let input = ref(null);
const clear = () => {
  if (props.modelValue !== "") {
    updateValue();
    focus.value = true;
    input.value.focus();
  }
};
</script>

<style lang="less" scoped>
.input {
  &__wrap {
    position: relative;
  }
  &__icon {
    &__prepend,
    &__append {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      color: var(--hints);
      font-size:24px;
    }
    &__prepend {
      left: 16px;
      + .input__field {
        padding-left: 40px;
      }
    }
    &__append {
      right: 14px;
      cursor: pointer;
    }
  }
}
.focus {
  .input {
    &__field {
      border: 1px solid var(--primary);
      outline: 0;
    }
    &__icon__prepend {
      color: var(--primary);
    }
  }
}
.error {
  .input__field {
    border: 1px solid var(--error);
  }
}
</style>
