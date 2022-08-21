<template>
  <div class="table__settings">
    <v-button
      type="secondary"
      icon="ci-plus"
      :iconOnly="true"
      :onClick="toggleModalSettings"
    ></v-button>
    <v-modal-settings v-if="modal">
      <template v-slot:header>
        <div class="table__settings__header">
          <h3 class="table__settings__title">Table settings</h3>
          <v-button
            type="icon"
            icon="icon-Cloud_Check"
            :onClick="toggleModalSettings"
          ></v-button>
        </div>
      </template>
      <template v-slot:body>
        <div class="table__settings__show" v-if="showAll">
          <h4 class="table__settings__show__title">Shown</h4>
          <v-checkbox
            class="table__settings__show__checkbox"
            v-model="showAllItem"
            :trueValue="true"
            :falseValue="false"
          ></v-checkbox>
          <span class="table__settings__show__desc">Show All</span>
        </div>
        <div class="table__settings__body">
          <v-draggable :list="items" @change="onDrag">
            <div
              class="table__settings__item"
              v-for="item in items"
              :key="item.value"
            >
              <v-icon class="table__settings__icon"> ci-grid_vertical</v-icon>
              <span class="table__settings__name">{{ item.text }}</span>
              <v-checkbox
                v-model="item.enabled"
                :trueValue="true"
                :falseValue="false"
              ></v-checkbox>
            </div>
          </v-draggable>
        </div>
      </template>
    </v-modal-settings>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import vButton from "../buttons/v-button.vue";
import vCheckbox from "../form/inputs/v-checkbox.vue";
import vModalSettings from "../modals/v-modal-settings.vue";
import vIcon from "../icons/v-icon.vue";

//props
const props = defineProps({
  items: {
    type: Object,
    default: () => {},
  },
  showAll: {
    type: Boolean,
    default: false,
  },
});

// modal
const modal = ref(false);
const toggleModalSettings = () => {
  modal.value = !modal.value;
};

//draggable
const emit = defineEmits(["onDrag"]);
const onDrag = () => {
  emit("onDrag");
};

//showAll
const showAllItem = ref(false);
watch(showAllItem, () => {
  props.items.forEach((el) => {
    if (showAllItem.value === true) {
      el.enabled = true;
    } else {
      el.enabled = false;
    }
  });
});
</script>
<style lang="less" scoped>
.table {
  &__settings {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 0 16px;
      border-bottom: 1px solid var(--border);
    }
    &__title {
      font-weight: 600;
      font-size: 20px;
      color: var(--secondary);
    }
    &__show {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 50px;
      background-color: var(--white);
      border-bottom: 1px solid var(--border);
      padding: 0 16px;
      &__title {
        color: var(--secondary);
        font-weight: 600;
        font-size: 16px;
      }
      &__checkbox {
        margin-left: auto;
        margin-right: 14px;
      }
      &__desc {
        font-weight: 500;
        font-size: 16px;
        color: var(--btn-text);
      }
    }
    &__body {
      background-color: var(--white);
    }
    &__item {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      border-bottom: 1px solid var(--border);
      height: 40px;
      padding: 0 20px 0 18px;
      cursor: grab;
    }
    &__icon {
      margin-right: 18px;
      font-size: 24px;
      color: var(--border);
    }
    &__name {
      margin-right: auto;
      font-size: 14px;
      font-weight: 500;
      color: var(--gray-text);
    }
  }
}
.sortable-ghost {
  background: #f5f7fb;
  .table {
    &__settings {
      &__icon {
        display: none;
      }
      &__name {
        display: none;
      }
      &__label {
        display: none;
      }
    }
  }
}
.sortable-drag {
  background-color: var(--white);
  .table {
    &__settings {
      &__icon {
        color: var(--primary);
      }
    }
  }
}
</style>
