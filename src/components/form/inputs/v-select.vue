<template>
  <div
    :class="[
      'select',
      { focus: focus },
      { error: error },
      { disabled: disabled },
    ]"
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
      <div class="select__wrap">
         <v-icon class="select__icon">ci-chevron_big_down</v-icon>
        <select
          class="field select__field"
          @focus="focus = true"
          @blur="focus = false"
          :value="modelValue"
          @change="updateValue($event.target.value)"
        >
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option[itemKey]"
            :selected="modelValue === option[itemKey]"
          >
            {{ option[itemText] }}
          </option>
        </select>
      </div>
    </v-group>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vGroup from '../addons-group/v-group.vue'
import vIcon from "../../icons/v-icon.vue"
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  label: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  noteMessage: {
    type: String,
    default: "",
  },
  itemKey: {
    type: String,
    default: "id",
  },
  itemText: {
    type: String,
    default: "title",
  },
  required: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object,
    default: [],
    required: true
  },
});
//focus
const focus = ref(false);

//emit
const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => {
  emit("update:modelValue", value);
};
</script>

<style lang="less" scoped>
.select {
  &__wrap {
    position: relative;
  }
  &__field {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  &__icon {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    right: 16px;
    font-size: 24px;
    color: var(--title);
  }
}
.focus {
  .select {
    &__field {
      border: 1px solid var(--primary);
      outline: 0;
    }
    &__icon {
      color: var(--primary);
    }
  }
}
.disabled {
  .select {
    &__field {
      pointer-events: none;
      color: var(--disabled);
    }
    &__icon {
      display: none;
    }
  }
}
.error {
  .select {
    &__field {
      border: 1px solid var(--error);
    }
  }
}
</style>
