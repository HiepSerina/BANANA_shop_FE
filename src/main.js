import { createApp } from 'vue'
import App from './App.vue'
import BaseItem from './components/base/BaseItem.vue'
import BaseExterior from './components/base/BaseExterior.vue'
import resource from './js/resource'
import emitter from 'tiny-emitter/instance'

import vueRouter from "./routers/index"

const app = createApp(App);

app.component("BaseItem", BaseItem);
app.component("BaseExterior", BaseExterior);

app.config.globalProperties.isLogin = false;
app.config.globalProperties.isAdmin = false;
app.config.globalProperties.$resource = resource;
app.config.globalProperties.$emitter = emitter;

app.use(vueRouter);

app.mount('#app')
