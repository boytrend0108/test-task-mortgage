import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/style.scss';
import store from './store'

const app = createApp(App)

app
  .use(store)
  .mount('#app')
