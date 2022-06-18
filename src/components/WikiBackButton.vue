<template>
  <div>
    <p>
      <router-link to="/home">Главная</router-link>
    </p>
    <p>
      <button @click="goBack">Назад</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "WikiBackButton",
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },
  },
};
</script>
