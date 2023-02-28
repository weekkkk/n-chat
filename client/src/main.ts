import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

import { openWs } from '@/ws';

const ws = openWs();

import './assets/styles/index.scss';
import './assets/fonts/Montserrat/index.scss';
import './assets/fonts/MaterialSymbolsRounded/index.scss';

const app = createApp(App);

const pinia = createPinia();

app.use(pinia).use(router).mount('#app');
