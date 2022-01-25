<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container container">
        <div class="header__body">
          <router-link class="header__logo" to="/">Clickadilla</router-link>
          <nav class="header__nav">
            <router-link to="/" exact>Главная</router-link>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
@import url('../assets/css/header.css');

</style>