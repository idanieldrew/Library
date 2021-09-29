import axios from "axios"

const state = {
      Categroies: []
}

const getters = {
      allCategories: state => state.Categories
}

const mutations = {
      SET_Categories(state, Categories) {
            state.Categories = Categories
      }
}

const actions = {
      async fetchCategories({ commit }) {
            let response = await axios.get('http://127.0.0.1:8000/api/categories')
            commit('SET_Categories', response.data.data)
      }
}

export default {
      state,
      getters,
      mutations,
      actions
}
