<template>
  <div class="nav__bar">
    <img src="../assets/img/logo.png" alt="wiki" />
    <NavbarItem v-for="(item, i) in navbarData" :key="i" :links="item.linkItem" :titel="item.titel" />
  </div>
</template>

<script>
import NavbarItem from "./WikiNavbar/NavbarItem.vue";

export default {
  name: "WikiNavbar",
  components: {
    NavbarItem,
  },
  data() {
    return {
      navbarData: [
        {
          titel: "",
          linkItem: ["Заглавная страница", "Содержание", "Избранные статьи", "Избранные статьи", "Случайная статья", "Текущие события", "Пожертвовать"],
        },
        {
          titel: "Участие",
          linkItem: ["Сообщить об ошибке", "Как править статьи", "Сообщество", "Форум", "Свежие правки", "Новые страницы", "Справка"],
        },
        {
          titel: "Инструменты",
          linkItem: ["Ссылки сюда", "Связанные правки", "Служебные страницы", "Постоянная ссылка", "Сведения о странице"],
        },
        {
          titel: "Печать/экспорт",
          linkItem: ["Создать книгу", "Скачать как PDF", "Версия для печати"],
        },
      ],
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
