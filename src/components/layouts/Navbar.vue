<template>
  <div class="bg-transparent fixed z-20 shadow-sm w-full py-5">
    <div class="flex flex-row">
      <div class="w-1/4 px-9 flex">
        <div class="font-bold hidden">
          <span>TEST</span>
        </div>
        <div class="lg:hidden">
          <button v-show="isAllow" @click="toggle">yes</button>
          <button v-show="!isAllow" @click="toggle">no</button>
        </div>
      </div>
      <div
        :class="{ hidden: isAllow }"
        class="
          flex
          lg:flex-row
          flex-col
          text-right
          lg:justify-end
          w-full
          lg:w-3/4
          lg:px-9
          px-0
          lg:py-0
          text-red-500
        "
      >
        <Links Url="/books" Content="books" />
        <Links Url="/publishers" Content="Publishers" />
        <Links Url="/about" Content="About" />
        <Links Url="/help" Content="Help" />
      </div>
    </div>
  </div>
</template>

<script>
import { toggleNavbar } from "@/customScript/Toggle.js";
import Links from "./NavLink.vue";
export default {
  name: "Navbar",

  setup() {
    let { isAllow, toggle } = toggleNavbar();
    return { isAllow, toggle };
  },

  components: {
    Links,
  },
};
</script>


