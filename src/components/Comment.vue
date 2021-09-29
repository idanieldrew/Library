<template>
  <div class="bg-white shadow-sm container mx-auto w-4/5">
    <div>
      <div class="block text-center">
        <h1>COMMENTS</h1>
      </div>
      <div class="flex justify-center justify-items-center mt-10">
        <div class="pl-20">
          <textarea
            v-model="body"
            class="border-2 border-blue-500 rounded-md"
            placeholder="write your comment :)"
            id="wri-comment"
            cols="100"
            rows="10"
          ></textarea>
        </div>
        <div class="pl-12 my-auto">
          <button
            @click.prevent="addComment"
            class="bg-blue-500 rounded-t-md text-white px-3 py-2"
          >
            send
          </button>
        </div>
      </div>

      <div
        v-for="comment in comments"
        :key="comment.id"
        id="all-comments"
        class="mt-5 w-4/6 text-center mx-auto rounded-full"
      >
        <div>
          <input
            readonly
            type="text"
            class="
              text-black
              w-full
              bg-transparent
              rounded-full
              h-12
              border border-gray-400
              focus:outline-none
              px-4
            "
            :value="comment.body"
          />
          <div class="flex" v-for="likes in comment.likes" :key="likes">
            <div class="w-1/3">like:{{ likes.like }}</div>
            <div class="w-1/3">replay: 3</div>
            <div class="w-1/3">view: 32</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      body: "",
      token: JSON.parse(localStorage.getItem("auth")),
    };
  },
  props: {
    comments: {
      type: String,
    },
  },

  methods: {
    async addComment() {
      axios.defaults.headers.common.Authorization = `Bearer ${this.token.token}`;
      await axios
        .post(
          `http://127.0.0.1:8000/api/books/${this.$route.params.slug}/comment`,
          {
            body: this.body,
          }
        )
        .then((this.body = ""))
        .catch((e) => console.log(e, 2));
    },
  },
};
</script>