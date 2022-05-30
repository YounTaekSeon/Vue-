<template>
  <!-- 기본 구성 -->
  <!-- <div class="home">
    <header>Header</header>
    <nav>Nav</nav>
    <section>
      <aside>Aside</aside>
      <article>Article</article>
    </section>
    <footer>Footer</footer>
  </div> -->
  <main-view></main-view>
  <index-view></index-view>
  <contents-view></contents-view>
</template>

<script>
import MainView from "@/views/MainView.vue";
import IndexView from "@/views/IndexView.vue";
import ContentsView from "@/views/ContentsView.vue";
export default {
  data() {
    return {};
  },

  components: {
    MainView,
    IndexView,
    ContentsView,
  },

  mounted() {},

  methods: {},
};
</script>
