<template>
  <div>
    <Hero />
    <div class="land-page grid grid-cols-6 py-5">
      <div class="col-span-2 pl-5">
        <Category />
      </div>
      <div class="col-span-4 pl-2 flex flex-wrap">
        <Books />
      </div>
    </div>
  </div>
</template>
<script>
import Books from "@/components/Book/Books.vue";
import { mapGetters, mapActions } from "vuex";
import Category from "@/components/Category.vue";
import Hero from "@/components//Hero/MainHero.vue";

export default {
  name: "land-page",
  // data() {
  //   return {
  //     url: this.$route.query.category,
  //   };
  // },
  components: {
    Books,
    Category,
    Hero,
  },

  // methods: {
  //   ...mapActions(["fetchBooksWithCategory"]),
  // },

  // computed: mapGetters(["allBooks"]),

  // mounted() {
  //   this.fetchBooksWithCategory(this.url);
    
  // },
};
</script>
