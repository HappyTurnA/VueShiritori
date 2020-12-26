import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBEiYkjPgX36WEZqbZ1dBsGDqIG-3_VK10",
  authDomain: "shiritori-141ce.firebaseapp.com",
  databaseURL: "https://shiritori-141ce-default-rtdb.firebaseio.com",
  projectId: "shiritori-141ce",
  storageBucket: "shiritori-141ce.appspot.com",
  messagingSenderId: "841429688403",
  appId: "1:841429688403:web:2bd9019739b5e024bae6a6",
  measurementId: "G-6VJ3KTRGSN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
