const state = {
  sidebar: {
    opened: false,
  },
}
const mutations = {
    TOGGLE_SIDEBAR(state){
        state.sidebar.opened  = !state.sidebar.opened;
    }
}

const actions = {
    toggleSidebar({commit}){
        commit("TOGGLE_SIDEBAR")
    }
}

export default {
  state,
  mutations,
  actions,
}
