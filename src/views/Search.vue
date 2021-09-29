<template>
  <div>
    <Single-Hero />
    <div class="text-center mt-5">
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
    </div>
    <div>
      {{ keyword }}
    </div>

    <div v-if="allBooks" class="col-span-4 pl-2 flex flex-wrap">
      <Books />
    </div>
    <div v-else>not found</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SingleHero from "@/components/Hero/SingleHero.vue";
import Books from "@/components/Book/Books.vue";
export default {
  name: "Serach-component",
  data() {
    return {
      keyword: this.$route.query.keyword,
    };
  },

  components: {
    SingleHero,
    Books,
  },

  methods: {
    ...mapActions(["searchBooks"]),
    doSearch() {
      this.searchBooks(this.keyword);
    },
  },

  watch: {
    keyword() {
      this.doSearch();
    },
  },

  computed: {
    ...mapGetters(["allBooks"]),
  },

  mounted() {
    this.searchBooks(this.keyword);
  },
};
</script>