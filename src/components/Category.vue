<template>
  <div class="text-center">
    <router-link
        class="block py-3 hover:text-red-600 hover:underline"
        :to="{ path: '/categories', query: { category: slug } }" @click.prevent="doFilter"
    >
      {{ name }}
    </router-link>
  </div>
</template>

<script>

export default {
  name: "category",
  props: {
    slug: {
      type: String
    },
    name: {
      type: String
    }
  },

  methods: {
    doFilter() {
      console.log(this.slug)
      this.$emit('filterBook', this.slug)
    },
  }
};
</script>