import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/Home.vue';
import Restaurant from './page/Restaurant.vue';
const routes = [
    { path: '/', component: Home },
    { name: 'Restaurant',path: '/restaurant/:name', component: Restaurant },
]
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    });

const vueApp = createApp(App);

vueApp.use(router);
vueApp.mount('#app')
