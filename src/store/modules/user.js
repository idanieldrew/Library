import axios from "axios"

const state = {
      users:[]
}

const getters = {
      allUsers : state => state.users
}

const mutations = {
     SET_USERS(state,users){
            state.users = users
     }
}

const actions = {
      async fetchUsers({commit}){
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('SET_USERS',response.data)
      }
}

export default {
      state,
      getters,
      mutations,
      actions
}
