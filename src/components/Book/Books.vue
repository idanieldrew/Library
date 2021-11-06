<template>
  <div class="px-2 py-2" v-for="book in allBooks" :key="book.slug">
    <Book :name="book.name" :author="book.author" :url="book.slug" :like="book.likes" />
  </div>
</template>

<script>
import Book from "./Book.vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "books",

  data() {
    return {
      url: this.$route.query.category,
    };
  },

  components: {
    Book,
  },

  setup() {
    const store = useStore()

    store.dispatch('fetchBooks')
    const allBooks = computed(() => store.getters.allBooks)

    return {allBooks}
  },
};
</script>