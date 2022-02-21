import { login } from '@/api/login'

const state = {
  username: '',
  token: '',
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  Login({ commit }, userInfo) {
    console.log('123')
    return new Promise((resolve, reject) => {
      login(userInfo)
        .then((response) => {
          if (response.code == '200') {
            console.log(response)
            // this.ls.set("Access-Token", response.token, 7 * 24 * 60 * 60 * 1000)
            // this.ls.set("USER_NAME", userInfo.username, 7 * 24 * 60 * 60 * 1000)
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
}

export default {
  state,
  mutations,
  actions,
}
