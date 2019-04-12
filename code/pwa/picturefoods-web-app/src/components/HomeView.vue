<template>
  <div>
    <img src="../assets/logo-picturefoods-300x80.png" alt="Picturefoods">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone">
        <p>Login</p>
      </div>
      
      <div class="mdl-cell mdl-cell--3-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="login">
        <label class="mdl-textfield__label" for="login">Login</label>
      </div>
      <div class="mdl-cell mdl-cell--3-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" id="password" type="password">
        <label class="mdl-textfield__label" for="password">Password</label>
      </div>
      <button class="mdl-cell mdl-cell--1-col">Log in</button>
      <p>Or <router-link to="/register">sign up</router-link> for Picturefoods account</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {},
    data () {
      return {}
    },
    mounted () {}
  }
</script>

<style scoped>
</style>
