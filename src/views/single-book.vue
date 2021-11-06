<template>
  <div>
    <Single-Hero/>
    <div>
      <SingleBook
          :name="singleBook.name"
          :author="singleBook.author"
          :publisher="singleBook.publisher"
          :like="singleBook.likes[0].like"
      />
    </div>
    <div>
      <Comment :comments="singleBook.comments"/>
    </div>
  </div>
</template>

<script>
import {mapActions, useStore} from 'vuex'
import {computed} from "vue";
import {useRoute} from 'vue-router'
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


  setup() {
    const route = useRoute()
    const store = useStore();
    const slug = route.params.slug

    store.dispatch('fetchSingleBook', slug)

    const singleBook = computed(() => store.getters.singleBook)

    return {singleBook}
  },
  methods: {
    ...mapActions(['fetchSingleBook'])

  },
  watch() {
    singleBook.comments()
    {
      alert(785)
      this.fetchSingleBook(this.$route.params.slug)
    }
  }
};
</script>