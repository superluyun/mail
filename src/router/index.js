import Vue from 'vue'
import VueRouter from 'vue-router'
import c_routes from './admin' 

Vue.use(VueRouter)
//点击重复路由是出现的报错 Error: Avoided redundant navigation to current location:
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push  = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/item1',
    component: () => import('@views/Home.vue'),
    children:[...c_routes]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('@views/Login.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
