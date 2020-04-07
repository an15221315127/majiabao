import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Main from '@/views/Main'
import movieDetail from '@/views/Home/MovieDetail'
import Library from '@/views/Library'
import Mine from '@/views/Mine'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/library',
          name: 'library',
          component: Library
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        },
      ]
    },
    {
      path: '/moviedetail',
      name: 'movieDetail',
      component: movieDetail,
    }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash', // app必须为hash模式，否则白屏
  base: process.env.BASE_URL,
  routes
})

export default router
