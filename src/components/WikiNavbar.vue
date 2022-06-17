<template>
  <div class="nav__bar">
    <img src="../assets/img/logo.png" alt="wiki" />
    <NavbarItem v-for="(item, i) in navbarData" :key="i" :titel="item.titel" :linkItem="item.linkItem" />
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
          linkItem: [
            { link: "Заглавная страница", path: "home" },
            { link: "Содержание", path: "soderjanie" },
            { link: "Избранные статьи", path: "izbranoe" },
            { link: "Случайная статья", path: "slychaunii" },
            { link: "Текущие события", path: "tekyshie" },
            { link: "Пожертвовать", path: "pojertv" },
          ],
        },
        {
          titel: "Участие",
          linkItem: [
            { link: "Сообщить об ошибке", path: "error" },
            { link: "Как править статьи", path: "pravit" },
            { link: "Сообщество", path: "soobsh" },
            { link: "Форум", path: "forym" },
            { link: "Свежие правки", path: "pravki" },
            { link: "Новые страницы", path: "nowie" },
            { link: "Справка", path: "spravka" },
          ],
        },
        {
          titel: "Инструменты",
          linkItem: [
            { link: "Ссылки сюда", path: "suda" },
            { link: "Связанные правки", path: "svayz" },
            { link: "Служебные страницы", path: "slyjebn" },
            { link: "Постоянная ссылка", path: "postoyan" },
            { link: "Сведения о странице", path: "svedinia" },
          ],
        },
        {
          titel: "Печать/экспорт",
          linkItem: [
            { link: "Создать книгу", path: "sozdat" },
            { link: "Скачать как PDF", path: "skachat" },
            { link: "Версия для печати", path: "pechat" },
          ],
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
