import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/HomeView'
import GalleryView from '@/components/GalleryView'
import DetailView from '@/components/DetailView'
import PostView from '@/components/PostView'
import CameraView from '@/components/CameraView'
import LoginView from '@/components/LoginView'
import RegisterView from '@/components/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/camera',
      name: 'camera',
      component: CameraView
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
