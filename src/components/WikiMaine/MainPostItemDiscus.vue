<template>
  <div class="post">
    <span class="subtitle">Из новых материалов</span>
    <h2 class="title">Знаете ли вы?</h2>
    <div class="post__content">
      <ul>
        <li v-for="(item, i) in postDiscus.listItem" :key="i">{{ item }}</li>
        <button v-if="postDiscus.btnItem">{{ postDiscus.btnItem }}</button>
      </ul>
      <div class="img__wrapper">
        <img v-for="(img, i) in postDiscus.imgItem" :key="i" :src="require('../../assets/img/' + img)" alt="img" />
      </div>
    </div>
    <WikiPostReaction :reactionPost="postDiscus.reactionPost" />
  </div>
</template>

<script>
import WikiPostReaction from "../WikiPostReaction.vue";

export default {
  name: "MainPostItemDiscus",
  components: {
    WikiPostReaction,
  },
  computed: {
    postDiscus() {
      return this.$store.getters.postDiscusData;
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

button {
  margin-top: 20px;
  padding: 5px 12px;
  font-weight: bold;
}

span {
  font-weight: bold;
}
.post__content {
  display: flex;
}
img {
  margin-top: 30px;
  margin-bottom: 30px;
}
.reaction-box {
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 0;
  padding: 0;
}
.btn-reaction {
  margin-top: 20px;
  padding: 5px 12px;
  font-weight: bold;
  background: lightgray;
  border: 1px solid;
  border-radius: 8px;
  font-size: 12px;
}
</style>
