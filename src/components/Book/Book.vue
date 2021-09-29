<template>
  <div
    class="
      shadow-lg
      bg-gray-200
      w-72
      h-auto
      rounded-md
      transform
      hover:-translate-y-2
    "
  >
    <div class="black w-11/12 mx-auto pt-1">
      <img src="/Images/book.PNG" alt="lorem lorem lorem" />
    </div>
    <div class="text-center">
      <div>
        <router-link class="hover:text-red-500 hover:underline" :to="url">
          {{ name }}
        </router-link>
      </div>
      <div>
        {{ author }}
      </div>
      <div>
        {{ like[0].lile }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    url: {
      required: true,
      type: String,
    },
    like: {
      required: true,
    },
  },
};
</script>