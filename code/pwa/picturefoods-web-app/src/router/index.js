import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import GalleryView from '@/components/GalleryView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import CameraView from '@/components/CameraView'
import LoginView from '@/components/LoginView'
import RegisterView from '@/components/RegisterView'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/post',
      name: 'post',
      component: PostView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('gallery')
  else next()
})

export default router
