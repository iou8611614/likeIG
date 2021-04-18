import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// const app = createApp(App);

// app.directive('focus',{
//   mounted(el){
//     console.log("on focus")
//     el.focus();
//   }
// })
// app.directive('click',{
//   mounted(el){
//     el.addEventListener('click',function(){
//       el.style.borderLeft = "solid 2px black";
//       console.log("Element Target: ",el);
//     })
    
//   }
// })
// app.directive('blur',{
//   mounted(el){
//     el.addEventListener('blur',function(){
//       el.style.borderLeft = "solid 2px black";
//       console.log("blur")
//     })
//   }
// })


createApp(App).use(store).use(router).mount("#app");

