import Vue from 'vue'
import Router from 'vue-router'
import home from './components/HelloWorld'
import demo from './components/demo'

Vue.use(Router)

export default new Router({
  routes: [
   {path:'/', redirect:'/home'},
   {path:'/home', component:home},
   {path:'/demo', component: demo}
  ]
})
