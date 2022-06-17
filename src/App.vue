<template>
  <div class="page__wrapper">
    <WikiNavbar />
    <router-view></router-view>
  </div>
</template>

<script>
import WikiNavbar from "./components/WikiNavbar.vue";

export default {
  name: "App",
  components: {
    WikiNavbar,
  },
};
</script>

<style>
body {
  background-color: #f6f6f6;
}
img {
  max-width: 100%;
  display: block;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #0645ad;
}
a:hover {
  text-decoration: underline;
}
.page__wrapper {
  display: grid;
  grid-template-columns: 14% 86%;
}
.container {
  padding: 30px;
  margin: 0 auto;
}
</style>
