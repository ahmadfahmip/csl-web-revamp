import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'vuetify/dist/vuetify.min.css'
import { VueMasonryPlugin } from 'vue-masonry'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueMasonryPlugin);
Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
