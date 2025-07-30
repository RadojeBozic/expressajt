import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import i18n from './i18n/index.js'
import axios from 'axios'

import 'aos/dist/aos.css';
import './css/style.css'



const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* export function isAuthenticated() {
  return !!localStorage.getItem('token');
} */

