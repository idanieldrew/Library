<template>
  <div class="bg-white shadow-sm container mx-auto w-4/5">
    <div>
      <div class="block text-center">
        <h1>COMMENTS</h1>
      </div>
      <div class="flex justify-center justify-items-center mt-10">
        <div class="pl-20">
          <textarea
              id="wri-comment"
              v-model="body"
              class="border-2 border-blue-500 rounded-md"
              cols="100"
              placeholder="write your comment :)"
              rows="10"
          ></textarea>
        </div>
        <div class="pl-12 my-auto">
          <button
              class="bg-blue-500 rounded-t-md text-white px-3 py-2"
              @click.prevent="addComment"
          >
            send
          </button>
        </div>
      </div>

      <div
          v-for="comment in comments"
          id="all-comments"
          :key="comment.id"
          class="mt-5 w-4/6 text-center mx-auto rounded-full"
      >
        <div>
          <input
              :value="comment.body"
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
              readonly
              type="text"
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
import {mapActions} from "vuex";

export default {
  data() {
    return {
      body: "",
      token: JSON.parse(localStorage.getItem("auth")),
    };
  },
  props: {
    comments: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(['fetchSingleBook']),
    afterComment() {
      this.body = "";
      window.scrollTo(0, 0);
      alert('success')
      this.fetchSingleBook(this.$route.params.slug)
    },
    addComment: async function () {
      axios.defaults.headers.common.Authorization = `Bearer ${this.token.token}`;
      await axios
          .post(
              `http://127.0.0.1:8000/api/books/${this.$route.params.slug}/comment`,
              {
                body: this.body,
              }
          )
          .then((this.afterComment()))
          .catch((e) => console.log(e, 2));
    },
  },
};
</script>