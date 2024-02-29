import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //la ruta base
    {
        path: '/',
        component:()=> import('../views/LandingPage.vue')
    },
    
    {
      path: '*',
      name: 'errorpage',
      component:()=> import('../views/Error404.vue')
  },
  ]


const router = new VueRouter({ routes, })
export default router;