import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import AccountView from '@/views/AccountView'
import GalleryView from '@/components/GalleryView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import CameraView from '@/components/CameraView'
import LoginView from '@/components/LoginView'
import RegisterView from '@/components/RegisterView'
// import firebase from 'firebase'
import * as firebase from 'firebase/app'
import 'firebase/auth'

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
      path: '/account',
      name: 'account',
      component: AccountView,
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

  // Make sure Firebase Auth object is ready before checking currentUser.
  // Without this a page reload would always go to login even with an authenticated user. Adapted from
  // https://medium.com/@eder.ramirez87/modern-pwa-with-vue-cli-3-vuetify-firestore-workbox-part-5-503d6027d7c4
  firebase.auth().onAuthStateChanged(() => {
    if (requiresAuth && !currentUser) next('login')
    else if (!requiresAuth && currentUser) next('gallery')
    else next()
  })
})

export default router
