<template>
  <div>
    <Single-Hero />
    <div class="flex justify-center container mx-auto w-auto text-center mt-5">
      <Login @doLogin="login" />
    </div>
  </div>
</template>
<script>
import SingleHero from "@/components/Hero/SingleHero.vue";
import Login from "@/components/Login.vue";
import {mapActions} from "vuex";

export default {
  components: {
    SingleHero,
    Login,
  },

  methods: {
    ...mapActions(["log"]),
    login(value) {
      this.log(value)
          .then(() => this.$router.push("/"));
    },
  },
};
</script>