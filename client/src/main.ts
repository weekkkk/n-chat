import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import './assets/styles/index.scss';
import './assets/fonts/Montserrat/index.scss';
import './assets/fonts/MaterialSymbolsRounded/index.scss';

import { openWs } from '@/ws';
const ws = openWs();
export { ws };

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router).mount('#app');
