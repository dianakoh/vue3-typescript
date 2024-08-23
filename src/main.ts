import { createApp } from 'vue';
import VuePinch from 'vue-pinch';

import ContextMenu from '@imengyu/vue3-context-menu';

import App from './App.vue';

createApp(App).use(VuePinch).use(ContextMenu).mount('#app');
