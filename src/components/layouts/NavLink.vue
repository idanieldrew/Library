<template>
  <div class="lg:px-5 px-3 lg:py-0 py-2">
    <router-link class="lg:px-5 px-0 lg:py-3 border-transparent border-b-2 hover:border-red-700" :to="Url">{{ Content }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    Url: {
      required: true,
      type: String,
    },
    Content: {
      required: true,
      type: String,
    },
  },
};
</script>