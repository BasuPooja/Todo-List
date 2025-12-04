import './assets/main.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')

/* --------------Global Build --------------*/

// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')

/* --------------ES Module Build --------------*/

// const { createApp } = Vue

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')


// const app = Vue.createApp({
//   data() {
//     return {
//       message: "Hello Pooja, Vue is working!",
//       count: 0
//     };
//   }
// });

// app.mount("#app");
