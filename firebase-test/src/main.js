import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyALNm6Zcso929fr4THA-s-L0u3fcNWirQU",
  authDomain: "mighty-touch.firebaseapp.com",
  databaseURL: "https://mighty-touch.firebaseio.com",
  projectId: "mighty-touch",
  storageBucket: "mighty-touch.appspot.com",
  messagingSenderId: "793083061509"
};
firebase.initializeApp(config);

Vue.prototype.$db = firebase.database()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
