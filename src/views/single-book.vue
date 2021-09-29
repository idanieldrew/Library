<template>
  <div>
    <Single-Hero />
    <div>
      <SingleBook
        :name="singleBook.name"
        :author="singleBook.author"
        :publisher="singleBook.publisher"
        :like="singleBook.likes[0].like"
      />
    </div>
    <div>
      <Comment :comments="singleBook.comments" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SingleHero from "@/components/Hero/SingleHero.vue";
import SingleBook from "@/components/Book/single-page-book.vue";
import Comment from "@/components/Comment.vue";
export default {
  name: "single-book",
  components: {
    SingleHero,
    SingleBook,
    Comment,
  },

  methods: {
    ...mapActions(["fetchSingleBook"]),
  },

  created() {
    this.fetchSingleBook(this.$route.params.slug);
  },

  computed: {
    ...mapGetters(["singleBook"]),
  },
};
</script>