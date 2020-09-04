export const state = () => ({
  categories: []
})

export const getters = {
  get (state) {
    return state.categories
  }
}
export const mutations = {
  read (state, payload) {
    state.categories = payload
  }
}
export const actions = {
  async read ({ commit }) {
    try {
      const categories = await this.$axios.get('http://front-test.idalite.com/api/product-category')
      commit('read', categories.data)
    } catch (error) {
    }
  }
}
