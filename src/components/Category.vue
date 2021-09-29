<template>
  <div class="text-center">
    <router-link
      class="block py-3 hover:text-red-600 hover:underline"
      v-for="category in allCategories"
      :key="category.id"
      :to="{ path: '/categories', query: { category: category.slug } }"
    >
      {{ category.name }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "category",
  methods: {
    ...mapActions(["fetchCategories"]),
    filter() {
      this.$emit('filterBook',)
    },
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories();
  },
};
</script>