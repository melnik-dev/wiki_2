<template>
  <div class="post">
    <span class="subtitle">{{ postData.subtitle }}</span>
    <h2 class="title">{{ postData.title }}</h2>
    <p>
      {{ postData.text }}
    </p>
    <div class="post-footer">
      <button v-if="postData.textButton">{{ postData.textButton }}</button>
      <span v-if="postData.textSpan">{{ postData.textSpan }}</span>
      <router-link :to="{ path: `/post/${postData.id}` }">ПОДРОБНЕЕ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPostItem",
  props: ["postData"],
};
</script>

<style scoped>
.post {
  border: 1px solid #c8ccd1;
  border-radius: 3px;
  padding: 24px;
}

.subtitle {
  font-size: 14px;
  color: #72777d;
}

.post-footer {
  display: flex;
  align-items: center;
  gap: 24px;
}

button {
  padding: 5px 12px;
  font-weight: bold;
}

span {
  font-weight: bold;
}
</style>
