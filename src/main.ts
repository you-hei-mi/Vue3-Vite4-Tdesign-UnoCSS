import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import 'virtual:uno.css'
import App from './App.vue'

createApp(App).use(TDesign).mount('#app')
