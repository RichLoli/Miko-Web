import { createRouter, createWebHashHistory } from 'vue-router'
import Progress from '@/plugins/nprogress'
import Cookies from 'js-cookie'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
    redirect: '/login/',
    children: [
        {
            path: '',
            name: 'LoginForm',
            component: () => import('@/views/login/form'),
        },
        {
            path: 'forget',
            name: 'forgetPasswd',
            component: () => import('@/views/login/forget'),
        },
        {
            path: 'register',
            name: 'registerUser',
            component: () => import('@/views/login/register'),
        }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/components/form/SliderVerify'),
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/error/404'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  Progress.start()
  //
  if (to.path.startsWith('/login')) {
    next()
  } else {
    let token = localStorage.getItem("Access-Token");
    if (undefined == token || null == token || '' === token) {
      console.log('用户未登录')
      next('/login')
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  Progress.done()
})

export default router
