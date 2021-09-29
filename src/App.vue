<template>
  <div class="h-screen w-full">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar.vue";
export default {
  components: { Navbar },
  name: "app",
  watch: {
    $route() {
      this.$store.commit("SET_DATA");
    },
  },
};
</script>

