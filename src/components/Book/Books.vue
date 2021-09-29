<template>
  <div class="px-2 py-2" v-for="book in allBooks" :key="book.slug">
    <Book :name="book.name" :author="book.author" :url="book.slug" :like="book.likes" />
  </div>
</template>

<script>
import Book from "./Book.vue";
import { mapGetters, mapActions } from "vuex";

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
  methods: {
    ...mapActions(["fetchBooks", "fetchBooksWithCategory"]),
  },
  computed: mapGetters(["allBooks"]),
  created() {
    if (this.$route.query && this.url) {
      this.fetchBooksWithCategory(this.url);
    } else {
      this.fetchBooks();
    }
  },

  watch: {
    url() {
      fetchBooksWithCategory(this.url);
    },
  },
};
</script>