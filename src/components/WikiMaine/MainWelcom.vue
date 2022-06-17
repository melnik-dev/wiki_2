<template>
  <div class="main__header">
    <div class="maine-header__welcome">
      <h1>Добро пожаловать в Википедию,</h1>
      <p>свободную энциклопедию, которую может редактировать каждый.</p>
    </div>
    <div class="maine-header__info">
      <p>Сейчас в Википедии 1 826 472 статьи на русском языке.</p>
      <div class="maine-header__info-wrapp">
        <span>Портал</span>
        <span>Справка</span>
        <button>Создать статью</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWelcom",
};
</script>

<style scoped>
.main__header {
  display: flex;
  justify-content: space-between;
  max-height: 130px;
  width: 100%;
  background: url("../../assets/img/wiki_banner.svg");
  border: 1px solid #c8ccd1;
  border-radius: 3px;
  margin-bottom: 24px;
}

.maine-header__welcome {
  background-image: linear-gradient(to right, #f8f9fa 0%, #f8f9fa 70%, rgba(248, 249, 250, 0) 100%);
  padding: 32px;
}

h1 {
  margin: 0;
}

p {
  margin: 0;
}

.maine-header__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding-right: 24px;
}

.maine-header__info-wrapp {
  display: flex;
  justify-content: end;
  gap: 26px;
}

button {
  padding: 5px 12px;
  font-weight: bold;
}

span {
  font-weight: bold;
}
</style>
