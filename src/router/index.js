import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import Signin from '../views/Signin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPositions){
    return {
      x: 0,
      y: 0
    };
  }
})

export default router
