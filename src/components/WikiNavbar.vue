<template>
  <div class="nav__bar">
    <img src="../assets/img/logo.png" alt="wiki" />
    <NavbarItem v-for="(item, i) in navbarData" :key="i" :titel="item.titel" :linkItem="item.linkItem" />
  </div>
</template>

<script>
import NavbarItem from "./WikiNavbar/NavbarItem.vue";

export default {
  name: "WikiNavbar",
  components: {
    NavbarItem,
  },
  computed: {
    navbarData() {
      return this.$store.getters.navbarData;
    },
  },
  created() {
    this.$store.dispatch("loadData");
  },
};
</script>

<style scoped>
nav__bar {
  padding-left: 16px;
}

img {
  width: 160px;
}
</style>
