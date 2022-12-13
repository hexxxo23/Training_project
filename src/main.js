import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

createApp({
    data() {
      return {
        count: 0
      }
    }
  }).mount('#app')

// // app.config.errorHandler = (err) => {
// //   /* handle error */
// // };
// app.component('TodoDeleteButton', TodoDeleteButton)

createApp(App).mount("#app");
