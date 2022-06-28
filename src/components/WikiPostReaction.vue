<template>
  <div>
    <ul class="reaction-box">
      <li v-for="(reaction, i) in postReaction" :key="reaction.id">
        <button class="btn-reaction" :class="[{ active: reaction.id === reactionPost.id && reactionPost.isActive }, btnClass[i]]" @click="addReaction(reaction.id, index)">
          {{ reaction.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WikiPostReaction",
  props: ["reactionPost", "index"],
  data() {
    return {
      btnClass: ["one", "two", "three", "four", "five"],
    };
  },
  methods: {
    // choiceReaction(id) {
    //   this.reactionPost = id;
    //   console.log("btn: " + id);
    //   this.isActive = !this.isActive;
    //   console.log("isActive: " + this.isActive);
    //   console.log("reactionPost: " + this.reactionPost);
    // },
    addReaction(id, index) {
      this.$store.commit("ADD_REACTION", { id, index });
    },
  },
  computed: {
    postReaction() {
      return this.$store.getters.reactions;
    },
  },
};
</script>

<style scope>
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
  cursor: pointer;
}
.active.one {
  background: red;
}
.active.two {
  background: orange;
}
.active.three {
  background: yellow;
}
.active.four {
  background: lightgreen;
}
.active.five {
  background: green;
}
.btn-reaction:hover {
  opacity: 0.8;
}
</style>
