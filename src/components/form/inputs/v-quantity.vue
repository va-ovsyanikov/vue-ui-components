<template>
  <div :class="addClass">
    <v-group
      :label="label"
      :errorMessage="errorMessage"
      :error="error"
      :disabled="disabled"
      :noteMessage="noteMessage"
    >
      <div class="quantity__wrap">
        <button class="quantity__btn__prepend" @click="onClickDecrease">
          <v-icon>{{ prependIcon }}</v-icon>
        </button>
        <input
          class="quantity__field"
          v-model="quantity"
          type="number"
          :min="min"
          :max="max"
        />
        <button class="quantity__btn__append" @click="onClickIncrease">
          <v-icon>{{ appendIcon }}</v-icon>
        </button>
      </div>
    </v-group>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import vGroup from "../addons-group/v-group.vue";
import vIcon from "../../icons/v-icon.vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: "",
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
  prependIcon: {
    type: String,
    default: "",
  },
  appendIcon: {
    type: String,
    default: "",
  },
  max: {
    type: Number,
    default: "",
  },
  min: {
    type: Number,
    default: "",
  },
  error: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// class
const addClass = computed(()=>{
	return {
		'quantity':true,
		'error': props.error,
		'disabled': props.disabled
	}
})



const count = ref(props.min);

//emit
const emit = defineEmits(["update:modelValue"]);
// const updateValue = (value) => {
//   emit("update:modelValue", value);
// };
let quantity = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
const onClickDecrease = () => {
  if (props.min < count.value) {
    count.value--;
    quantity.value = count.value;
    // updateValue(count.value);
  }
};
const onClickIncrease = () => {
  if (props.max > count.value) {
    count.value++;
    quantity.value = count.value;
    // updateValue(count.value);
  }
};
</script>

<style lang="less" scoped>
.quantity {
  width: 130px;
  &__wrap {
    border-radius: 2px;
    border: 1px solid var(--title);
    display: flex;
  }
  &__field {
    width: 56px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: var(--gray-text);
    border: none;
    border-right: 1px solid var(--title);
    border-left: 1px solid var(--title);
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      display: none;
    }
    &:focus {
      outline: 0;
    }
  }
  &__btn {
    &__prepend,
    &__append {
      height: 40px;
      width: 36px;
      font-size: 24px;
      cursor: pointer;
      transition: 0.2s;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--white);
      color: var(--primary);
    }
  }
}
.error {
  .quantity {
    &__wrap {
      border: 1px solid var(--error);
      outline: 0;
    }
  }
}
.disabled {
  .quantity {
    &__wrap {
      pointer-events: none;
      border: 1px solid var(--disabled);
    }
    &__field {
      border-right: 1px solid var(--disabled);
      border-left: 1px solid var(--disabled);
      color: var(--disabled);
    }
    &__btn {
      &__prepend,
      &__append {
        color: var(--disabled);
      }
    }
  }
}
</style>
