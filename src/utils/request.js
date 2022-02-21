import axios from 'axios'
import { VueAxios } from '@/plugins/axios'

let apiBaseUrl = 'https://mock.mengxuegu.com/mock/61e1986f17249f68847fc091/api'

const service = axios.create({
  baseURL: apiBaseUrl,
  timeout: 5000, // 请求超时时间
})

const err = (error) => {
  if (error.response) {
    let data = error.response.data
    console.log('------异常响应------', error.response.status)
  }
  return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, err)


const installer = {
  vm: {},
  install(app) {
    app.use(VueAxios, service)
  }
}

export {
    installer as VueAxios,
    service as axios
}
