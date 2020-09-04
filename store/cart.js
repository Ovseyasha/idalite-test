export const state = () => ({
  cart: []
})

export const getters = {
  products (state) {
    return state.cart
  },
  count (state) {
    return state.cart.length
  },
  hasIt: state => (id) => {
    return state.cart.find((p) => {
      if (p === id) {
        return true
      }
    })
  }
}
export const mutations = {
  add (state, payload) {
    state.cart.push(payload)
  },
  remove (state, payload) {
    state.cart.forEach((p, ind) => {
      if (p === payload) {
        state.cart.splice(ind, 1)
      }
    })
  }
}
export const actions = {
  add ({ commit }, payload) {
    commit('add', payload)
  },
  remove ({ commit }, payload) {
    commit('remove', payload)
  },
  read ({ commit }) {
    commit('read')
  }
}
