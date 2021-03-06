import cookie from 'vue-cookie'
export const state = () => ({
  cart: []
})

export const getters = {
  products (state) {
    return state.cart
  },
  count (state) {
    if (state.cart) {
      return state.cart.length
    }
  },
  hasIt: state => (id) => {
    if (state.cart) {
      return state.cart.find((p) => {
        if (p === id) {
          return true
        }
      })
    }
  }
}
export const mutations = {
  add (state, payload) {
    state.cart.push(payload)
    cookie.set('cart', JSON.stringify(state.cart), 1)
  },
  remove (state, payload) {
    state.cart.forEach((p, ind) => {
      if (p === payload) {
        state.cart.splice(ind, 1)
      }
    })
    cookie.set('cart', JSON.stringify(state.cart), 1)
  },
  clear (state) {
    state.cart = []
    cookie.set('cart', JSON.stringify(state.cart), 1)
  },
  read (state, payload) {
    state.cart = payload
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
    if (JSON.parse(cookie.get('cart')) === null) {
      commit('read', [])
    } else {
      commit('read', JSON.parse(cookie.get('cart')))
    }
  },
  clear ({ commit }) {
    commit('clear')
  }
}
