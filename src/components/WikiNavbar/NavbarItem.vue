<template>
  <ul>
    <span class="title" v-if="titel">{{ titel }}</span>
    <li v-for="(item, index) in links" :key="index">
      <a href="#">{{ item }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavbarItem",
  props: ["links", "titel"],
};
</script>

<style scoped>
ul {
  padding-left: 6px;
  padding-top: 6px;
}

li {
  list-style: none;
  padding-bottom: 3px;
  padding-top: 3px;
  font-size: 14px;
}
.title {
  background-image: linear-gradient(to right, rgba(200, 204, 209, 0) 0, #c8ccd1 33%, #c8ccd1 66%, rgba(200, 204, 209, 0) 100%);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px;
  color: #54595d;
  cursor: default;
  padding-bottom: 3px;
}
</style>
