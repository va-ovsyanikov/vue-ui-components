import { createApp } from 'vue'
import App from './App.vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import { VueDraggableNext } from 'vue-draggable-next'
import '../public/global.less'

const app = createApp(App)
app.component('VTable', Vue3EasyDataTable);
app.component('v-draggable', VueDraggableNext);
app.mount('#app')
