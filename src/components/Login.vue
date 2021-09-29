<template>
  <div>
    <form
      action=""
      @submit.prevent="login"
      class="border-2 border-blue-500 p-10"
    >
      <div>
        <input v-model="form.email" type="email" placeholder="EMAIL" />
      </div>
      <div>
        <input v-model="form.password" type="password" placeholder="PASSWORD" />
      </div>
      <div>
        <button type="submit">login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      this.$emit("doLogin", this.form);
    },
  },
};
</script>