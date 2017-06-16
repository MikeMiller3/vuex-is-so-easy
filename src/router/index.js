import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/components/Counter'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [{
      	path: '',
      	name: 'Counter',
      	component: Counter
      }]
    },
  ]
})
