import axios from "axios"

const state = {
      isAuth: false,
      token: ''
}

const getters = {
      isLogin: state => state.isAuth
}

const mutations = {
      SET_DATA(state) {
            let token = localStorage.getItem('auth')
            token = JSON.parse(token)
            if (token) {
                  state.isAuth = true,
                        state.token = token
            } else {
                  state.isAuth = false,
                        state.token = ''
            }
      },

      LOGIN(state, token) {
            if (token) {
                  localStorage.setItem('auth', JSON.stringify(token))
                  state.isAuth = true,
                        state.token = token
            } else {
                  state.isAuth = false,
                        state.token = ''
            }
      },

      LOGOUT(state) {
            localStorage.removeItem('auth')
            state.isAuth = false,
                  state.token = ''
      }
}

const actions = {
      async log({ commit }, data) {
            await axios.post('http://127.0.0.1:8000/api/login', data)
                  .then(({ data }) => { commit('LOGIN', data) })
      }
}

export default {
      state,
      getters,
      mutations,
      actions
}
