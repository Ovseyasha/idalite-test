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
  },
  getByCategoryFilter: state => ({ id, filter }) => {
    const products = []
    state.products.forEach((p) => {
      if (p.category === +id) {
        products.push(p)
      }
    })
    if (filter === 'price') {
      products.sort((a, b) => {
        if (+a[filter] < +b[filter]) {
          return -1
        }
        if (+a[filter] > +b[filter]) {
          return 1
        }
        return 0
      })
    } else if (filter === 'rating') {
      products.sort((a, b) => {
        if (+a[filter] < +b[filter]) {
          return 1
        }
        if (+a[filter] > +b[filter]) {
          return -1
        }
        return 0
      })
    }
    return products
  },
  inCart: state => (cart) => {
    const products = []
    state.products.forEach((p) => {
      cart.forEach((id) => {
        if (p.id === id) {
          products.push(p)
        }
      })
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
