<template>
  <div class="bg-transparent fixed z-20 shadow-sm w-full py-5">
    <div class="lg:flex lg:flex-row flex-col hidden">
      <div class="w-1/4 px-9">logo</div>
      <div class="flex justify-end w-3/4 px-9 text-red-500">
        <Links Url="/books" Content="books" />
        <Links Url="/publishers" Content="Publishers" />
        <Links Url="/about" Content="About" />
        <Links Url="/help" Content="Help" />
      </div>
    </div>
  </div>
</template>

<script>
import Links from "./NavLink.vue";
export default {
  name: "Navbar",
  components: {
    Links,
  },
};
</script>


