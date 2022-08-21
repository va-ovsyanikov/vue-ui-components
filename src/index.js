import vButton from './components/buttons/v-button.vue'
import vLabel from './components/form/addons/v-label.vue'
import vNote from './components/form/addons/v-note.vue'
import vGroup from './components/form/addons-group/v-group.vue'
import vInput from './components/form/inputs/v-input.vue'
import vQuantity from './components/form/inputs/v-quantity.vue'
import vBoolean from './components/form/inputs/v-boolean.vue'
import vTextarea from './components/form/inputs/v-textarea.vue'
import vSelect from './components/form/inputs/v-select.vue'
import vCheckbox from './components/form/inputs/v-checkbox.vue'
import vTableHeader from './components/tables/v-table-header.vue'
import vTableSettings from './components/tables/v-table-settings.vue'
import vModalSettings from './components/modals/v-modal-settings.vue'
import vList from './components/lists/v-list.vue'
import vListItem from './components/lists/v-list-item.vue'
import vListHeader from './components/lists/v-list-header.vue'
import vIcon from './components/icons/v-icon.vue'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import { VueDraggableNext } from 'vue-draggable-next'
import helpers from './helpers.js'
export default {
    install: (Vue, options) => {
        Vue.component('vButton', vButton),
            Vue.component('vLabel', vLabel),
            Vue.component('vNote', vNote),
            Vue.component('vGroup', vGroup),
            Vue.component('vInput', vInput),
            Vue.component('vQuantity', vQuantity),
            Vue.component('vBoolean', vBoolean),
            Vue.component('vTextarea', vTextarea),
            Vue.component('vSelect', vSelect),
            Vue.component('vCheckbox', vCheckbox),
            Vue.component('vTableHeader', vTableHeader),
            Vue.component('vTableSettings', vTableSettings),
            Vue.component('vModalSettings', vModalSettings),
            Vue.component('vList', vList),
            Vue.component('vListItem', vListItem),
            Vue.component('vListHeader', vListHeader),
            Vue.component('vIcon', vIcon),
            Vue.component('VTable', Vue3EasyDataTable),
            Vue.component('v-draggable', VueDraggableNext),
            Vue.provide('helpers', helpers)

    }
}

