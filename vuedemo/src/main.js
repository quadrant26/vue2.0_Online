// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VRouter from 'vue-router'

import Apple from './components/apple'
import Banana from './components/banana'
import YellowBanner from './components/yellowbanana'

Vue.use(VRouter)

let router = new VRouter({
  mode: 'history',
  routes : [
    {
      path: '/',
      redirect: '/apple'
    },
    {
      path: '/apple/:color',
      component: Apple
    },
    {
      path: '/banana',
      component: Banana,
      children: [
        {
          path: 'yellow',
          component: YellowBanner
        }
      ]
    }
  ]
})

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
