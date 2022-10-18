import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'

import { initializeApp } from 'firebase/app'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import App from './App.vue'

import 'virtual:windi.css'
import './styles/main.css'
import { useUserStore } from './stores/user'
import { userApi } from './utils'
import { UserUserTypeEnum } from './api/models'

dotenv.config()

initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
  appId: process.env.FIREBASE_APP_ID,
})

const pinia = createPinia()

const app = createApp(App)
const head = createHead()

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore(pinia)
  const token = useLocalStorage('token', '')
  if (typeof userStore.user === 'undefined' && token.value) {
    userApi.usersGet().then(({ data }) => {
      userStore.setUser(data)
      if (data.userType === 'merchant') {
        next('/merchant')
        return
      }
      next()
    }).catch(() => {
      userStore.logout()
      next('/')
    })
    return
  }

  if (userStore.user?.userType === UserUserTypeEnum.Customer && to.path.startsWith('/merchant')) {
    next('/')
    return
  }

  if (userStore.user?.userType === UserUserTypeEnum.Merchant && !to.path.startsWith('/merchant')) {
    next('/merchant')
    return
  }

  next()
})

app.use(pinia)
app.use(router)
app.use(head)
app.mount('#app')
