<template>
  <div class="relative z-10 w-full">
    <img
      class="object-cover w-full h-1/3 lg:h-full"
      src="/Images/Hero.jpg"
      alt=""
    />
    <div class="absolute inset-0 opacity-30 bg-gray-500"></div>
    <div
      class="
        hidden
        lg:block
        mx-auto
        container
        inset-0
        absolute
        text-center
        leading-loose
        w-full
        tracking-widest
        italic
        mt-32
        pl-3
        animate-pulse
        font-black
        duration-10000
        text-white
      "
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque vel
      placeat et voluptates optio eligendi molestias culpa modi dignissimos,
      quaerat nobis facilis obcaecati similique id est! Totam dolore aliquid
      quos amet obcaecati eum debitis quod ullam dolor eius nam et eligendi odit
      voluptate cum sunt, dolorem at maxime est necessitatibus illo nesciunt
      ipsa! Doloremque inventore incidunt optio totam earum! Quam deserunt vitae
      necessitatibus soluta incidunt illo cumque ipsa ad! Odit impedit maiores
      natus esse, modi officiis distinctio, debitis ipsa architecto eaque,
      voluptate eum quia dolor quidem rem? Expedita repellendus inventore quas
      vero eum dolores eaque fugiat iusto? Dolor ab sunt dolorum fugiat magnam
      accusantium vel laborum molestiae, asperiores fugit eveniet cumque
      corporis doloremque quae, non consequuntur, ullam id provident? Harum unde
      fugit deserunt repudiandae quibusdam cum totam! At sapiente veniam
      explicabo officiis amet praesentium placeat aliquam molestias, asperiores
      sequi rerum vero facilis reiciendis velit in quidem nobis veritatis enim,
      corporis, fugit eaque dolorem ex quisquam ipsam. Eveniet eius expedita
      esse alias dolorem qui tenetur doloribus impedit aut earum quo rem nam,
      cumque nostrum recusandae? Sequi quidem maxime ipsum voluptatum officia
      totam dicta. Ipsum corporis eum error mollitia, tempore ea ut omnis,
      repellat fuga ratione reiciendis. Aliquid mollitia nihil harum. Porro.
    </div>
    <div class="container mx-auto text-center absolute top-1/2 lg:block hidden">
      <Search />
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  components: {
    Search,
  },
};
</script>