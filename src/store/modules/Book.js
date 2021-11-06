import axios from "axios"

const state = {
    Books: [],
    Book: [],
    Categories: []
}

const getters = {
    allBooks: state => state.Books,
    singleBook: state => state.Book,
    allCategories: state => state.Categories
}

const mutations = {
    SET_BOOKS(state, Books) {
        state.Books = Books.books
    },

    FILTER_BOOKS(state, Books) {
        while (state.Books.length > 0) {
            state.Books.pop()
        }
        state.Books = Books.books
    },

    SET_BOOK(state, Book) {
        state.Book = Book
    },

    SET_CATEGOIES(state, Catgories) {
        state.Categories = Catgories.categories
    },

    SEARCH_BOOKS(state, res) {
        state.Books = res.data
    }
}
const actions = {
    async fetchBooks({commit}) {
        let response = await axios.get('http://127.0.0.1:8000/api/books')
        commit('SET_BOOKS', response.data)
    },

    async fetchBooksWithCategory({commit}, category) {
        let response = await axios.get(`http://127.0.0.1:8000/api/books?category=${category}`)
        commit('FILTER_BOOKS', response.data)
    },

    async fetchCategories({commit}) {
        let response = await axios.get('http://127.0.0.1:8000/api/books')
        commit('SET_CATEGOIES', response.data)
    },

    async fetchSingleBook({commit}, slug) {
        let response = await axios.get(`http://127.0.0.1:8000/api/books/${slug}`)
        commit('SET_BOOK', response.data)
    },

    async searchBooks({commit}, keyword) {
        let result = await axios.get(`http://127.0.0.1:8000/api/search?keyword=${keyword}`)
        commit('SEARCH_BOOKS', result.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
