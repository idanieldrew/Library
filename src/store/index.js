import { createStore } from 'vuex'
import authModule from './modules/auth.js'
import userModule from './modules/user.js'
import BookModule from './modules/Book.js'
// import CategoryModule from './modules/Category.js'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    authModule,
    userModule,
    BookModule,
  }
})
