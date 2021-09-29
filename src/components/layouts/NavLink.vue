<template>
  <div class="px-5">
    <router-link class="px-5 py-3 border-transparent border-b-2 hover:border-red-700" :to="Url">{{ Content }}</router-link>
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