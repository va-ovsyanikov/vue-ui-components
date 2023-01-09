<template>
  <div class="boolean">
    <v-group :label="label">
      <div class="boolean__wrap">
        <button
          :class="addClassTrue"
          @click="onClickTrue"
        >
          {{ trueText }}
        </button>
        <button
          :class="addClassFalse"
          @click="onClickFalse"
        >
          {{ falseText }}
        </button>
      </div>
    </v-group>
  </div>
</template>

<script setup>
import {computed} from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  trueText: {
    type: String,
    default: "Yes",
  },
  falseText: {
    type: String,
    default: "No",
  },
});

//class true
const addClassTrue = computed(()=>{
	return{
		'boolean__btn__true':true,
		'active': props.modelValue === true
	}
})

//class false
const addClassFalse = computed(()=>{
	return{
		'boolean__btn__false':true,
		'active': props.modelValue === false
	}
})

const emit = defineEmits(["update:modelValue"]);
const updateValue = (value) => {
  emit("update:modelValue", value);
};

const onClickTrue = () => {
  updateValue(true);
};

const onClickFalse = () => {
  updateValue(false);
};
</script>

<style lang="less" scoped>
.boolean {
  &__wrap {
    display: flex;
  }
  &__btn {
    &__true,
    &__false {
      width: 105px;
      height: 40px;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--white);
      color: var(--hints);
    }
    &__true {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
      border: 1px solid var(--title);
      border-right: none;
      &.active {
        color: var(--gray-text);
        border: 1px solid var(--primary);
        border-right: none;
        + .boolean__btn__false {
          border-left: 1px solid var(--primary);
        }
      }
    }
    &__false {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
      border: 1px solid var(--title);
      &.active {
        color: var(--gray-text);
        border: 1px solid var(--primary);
      }
    }
  }
}
</style>
