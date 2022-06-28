<template>
  <div v-if="post" class="post">
    <span class="subtitle">{{ post.subtitle }}</span>
    <h2 class="title">{{ post.title }}</h2>
    <p>
      {{ post.text }}
    </p>
    <div class="post-footer">
      <button v-if="post.textButton">{{ post.textButton }}</button>
      <span v-if="post.textSpan">{{ post.textSpan }}</span>
    </div>
    <WikiPostReaction :reactionPost="post.reactionPost" :index="post.id" />
    <WikiBackButton />
  </div>
</template>

<script>
import WikiPostReaction from "./WikiPostReaction.vue";

export default {
  name: "WikiPost",
  components: {
    WikiPostReaction,
  },
  computed: {
    postId() {
      return parseInt(this.$route.params.id);
    },
    post() {
      return this.$store.getters.postData.find((post) => post.id == this.postId);
    },
  },
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
