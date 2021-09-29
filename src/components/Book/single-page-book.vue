<template>
  <div class="container mx-auto shadow-md flex mt-5">
    <div class="w-2/3">
      <div class="text-8xl block text-center">
        {{ name }}
      </div>
      <div class="font-bold">
        A Trace Of
        <p class="text-5xl">
          <router-link
            class="text-red-400 hover:text-red-700 hover:underline p-10"
            to="/"
          >
            {{ author }}
          </router-link>
        </p>
        <div class="pt-5 leading-10 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quia
          culpa praesentium consectetur corrupti odit fuga nesciunt officiis
          delectus, aliquid alias placeat quo non autem enim assumenda dolorum
          error, necessitatibus temporibus consequatur rerum dolores impedit
          molestiae. Corrupti, impedit provident sit totam a eaque, accusantium
          alias praesentium velit qui repudiandae magnam laborum dicta adipisci
          culpa voluptatum odit, quam sint! Eos cumque voluptate ut magnam
          deleniti consequatur.
        </div>
        <div class="text-center mt-5 flex justify-center">
          <button
            class="
              bg-transparent
              border border-red-400
              px-3
              py-2
              rounded-lg
              hover:bg-red-500
            "
          >
            Buy
          </button>
          <div class="pl-5">
            {{ like }}
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/3">
      <img class="h-3/5 w-11/12 rounded-full" src="/Images/Book.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "single-book",

  props: {
    name: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    publisher: {
      required: true,
      type: String,
    },
    like: {
      required: true,
    },
  },
};
</script>