<template>
  <div>
    <img src="../assets/logo-picturefoods-300x80.png" alt="Picturefoods">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone">
        <p>Login</p>
      </div>
      
      <div class="mdl-cell mdl-cell--3-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="email" v-model="email">
        <label class="mdl-textfield__label" for="login">Login (E-Mail)</label>
      </div>
      <div class="mdl-cell mdl-cell--3-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" id="password" type="password" v-model="password">
        <label class="mdl-textfield__label" for="password">Password</label>
      </div>
      <button class="mdl-cell mdl-cell--1-col" @click="login">Log in</button>
      <p>Or <router-link to="/register">sign up</router-link> for Picturefoods account</p>
    </div>
    <div>Login status: {{result}}</div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data () {
      return {
        email: null,
        password: null,
        result: '-'
      }
    },
    methods: {
      login: function () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            console.log('Login success')
            this.result = 'Success'
            this.$router.replace('gallery')
          },
          (err) => {
            console.log('Login failure. ' + err.message)
            this.result = 'Failure'
          }
        )
      }
    }
  }
</script>
