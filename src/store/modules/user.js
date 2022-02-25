import { login, logout } from '@/api/login'
import { ACCESS_TOKEN } from "@/store/mutation-types"


const state = {
  username: '',
  token: '',
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_PERMISSION_LIST:  () =>{

  }
}

const actions = {
  Login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then((response) => {
          if (response.code == '200') {
            localStorage.setItem(ACCESS_TOKEN, response.token)
            commit('SET_TOKEN', response.token)
            resolve(response)
          } else {
            reject(response)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  Logout({ commit, state }) {
    return new Promise((resolve) => {
      let logoutToken = state.token;
      commit('SET_TOKEN', '')
      localStorage.removeItem(ACCESS_TOKEN)
      logout(logoutToken).then(() => {
        resolve()
      }).catch(() => {
        resolve()
      })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
