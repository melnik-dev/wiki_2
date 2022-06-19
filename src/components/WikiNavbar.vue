<template>
  <div class="nav__bar">
    <img src="../assets/img/logo.png" alt="wiki" />
    <NavbarItem v-for="(item, i) in navbarData" :key="i" :titel="item.titel" :linkItem="item.linkItem" />
  </div>
</template>

<script>
import NavbarItem from "./WikiNavbar/NavbarItem.vue";
import data from "../indexDB";

export default {
  name: "WikiNavbar",
  components: {
    NavbarItem,
  },
  data() {
    return {
      navbarData: data.navbarData,
    };
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
