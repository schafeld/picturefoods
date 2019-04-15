// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import { database } from '@/services/firebase'
import firebase from 'firebase'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuefire)

Vue.config.productionTip = false

let app = ''
// initialize Vue app only when Firebase initialized (allow reloads for routes requiring auth)
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      firebase: {
        imageCatalog: database.ref('imageCatalog').orderByChild('created_at')
      },
      router,
      template: '<App/>',
      components: { App }
    })
  }
})
