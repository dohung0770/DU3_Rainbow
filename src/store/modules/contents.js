const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const actions = {

}

const mutations = {
  updateUser(state, { user }) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}