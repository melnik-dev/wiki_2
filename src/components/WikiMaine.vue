<template>
  <main class="main">
    <MainWelcom />
    <div class="post__wrapper">
      <MainPostItem v-for="(item, i) in postData" :key="i" :postData="item" :index="item.id" />
      <MainPostItemDiscus />
    </div>
    <WikiBackButton />
  </main>
</template>

<script>
import MainWelcom from "./WikiMaine/MainWelcom.vue";
import MainPostItem from "./WikiMaine/MainPostItem.vue";
import MainPostItemDiscus from "./WikiMaine/MainPostItemDiscus.vue";

export default {
  name: "WikiMaine",
  components: {
    MainWelcom,
    MainPostItem,
    MainPostItemDiscus,
  },
  computed: {
    postData() {
      return this.$store.getters.postData;
    },
  },
};
</script>

<style>
.main {
  padding: 20px 24px 24px;
}

.post__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
</style>
