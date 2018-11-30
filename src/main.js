import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes // short for routes: routes
})

new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  },
  router
})