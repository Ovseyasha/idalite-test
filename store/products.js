export const state = () => ({
  products: []
})

export const getters = {
  get (state) {
    return state.products
  },
  getByCategory: state => (id) => {
    const products = []
    state.products.forEach((p) => {
      if (p.category === +id) {
        products.push(p)
      }
    })
    return products
  }
}
export const mutations = {
  read (state, payload) {
    state.products = payload
  }
}
export const actions = {
  async read ({ commit }) {
    try {
      const products = await this.$axios.get('http://front-test.idalite.com/api/product')
      commit('read', products.data)
    } catch (error) {
    }
  }
}
