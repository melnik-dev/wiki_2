<template>
  <div class="page__wrapper">
    <WikiNavbar />
    <WikiMaine />
  </div>
</template>

<script>
import WikiNavbar from "./components/WikiNavbar.vue";
import WikiMaine from "./components/WikiMaine.vue";

export default {
  name: "App",
  components: {
    WikiNavbar,
    WikiMaine,
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
</style>
