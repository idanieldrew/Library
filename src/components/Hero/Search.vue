<template>
  <input
    type="search"
    v-model="keyword"
    name="keyword"
    id="search-book"
    placeholder="Here! Do Search & Enjoy..."
    class="
      text-blue-500
      animate-bounce
      w-1/3
      border-2 border-purple-700
      p-2
      rounded-xl
      focus:ring-2
      focus:outline-none
    "
  />
  <div>
    <button @click.prevent="doSearch()">submit</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "serach",
  data() {
    return {
      keyword: "",
    };
  },

  methods: {
    ...mapActions(["searchBooks"]),
    doSearch() {
      this.$router.push({ path: "/search", query: { keyword: this.keyword } });
      // this.searchBooks(this.keyword);
    },
  },

  // watch: {
  //   keyword() {
  //     this.doSearch();
  //   },
  // },

  computed: {
    ...mapGetters(["allBooks"]),
  },
};
</script>