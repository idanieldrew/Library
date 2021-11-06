import { ref } from 'vue';

export function toggleNavbar() {
      let isAllow = ref(false)

      function show() {
            isAllow.value = true
      }

      function hide() {
            isAllow.value = false
      }

      function toggle() {
            isAllow.value == true ? hide() : show()
      }

      return { isAllow, show, hide, toggle }
}