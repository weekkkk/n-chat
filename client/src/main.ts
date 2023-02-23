import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/index.scss';
import './assets/fonts/Montserrat/index.scss';
import './assets/fonts/MaterialSymbolsRounded/index.scss';

const app = createApp(App);

app.use(router).mount('#app');
