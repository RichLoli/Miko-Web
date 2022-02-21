import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installElementPlusIcon from './plugins/element-plus-icons'
import { VueAxios } from './utils/request'
import Cookies from 'js-cookie'
import Storage from 'vue-ls';

import '@/assets/common/css/normalize.css'

const app = createApp(App)
installElementPlus(app)
installElementPlusIcon(app)

app.config.globalProperties.$cookies = Cookies

if (process.env.NODE_ENV == 'development') {
  app.config.devtools = true
} else {
  app.config.devtools = false
}

app.use(store).use(router).use(VueAxios).use(Storage).mount('#app')
