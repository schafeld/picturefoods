<template>
  <div>
    <img src="../assets/logo-picturefoods-300x80.png" alt="Picturefoods">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone">
        <p>Sign up for a Picturefoods account</p>
      </div>
      
      <div class="mdl-cell mdl-cell--3-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="email" v-model="email">
        <label class="mdl-textfield__label" for="login">Login (E-Mail)</label>
      </div>
      <div class="mdl-cell mdl-cell--3-col mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input class="mdl-textfield__input" type="text" id="password" v-model="password">
        <label class="mdl-textfield__label" for="password">Password</label>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="register">Sign up with email</button>
        <p>Or <router-link to="/login">log in</router-link></p>
      </div>
    </div>
    <div>Login {{email}}, password: {{password}} </div>
    <div>Signup result: {{result}}</div>
  </div>
</template>

<script>
  import * as firebase from 'firebase/app'
  import 'firebase/auth'

  export default {
    methods: {
      register () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            console.log('Signup success')
            this.result = 'Success'
            this.$router.replace('gallery')
          },
          (err) => {
            console.log('Signup failure. ' + err.message)
            this.result = 'Failure'
          }
        )
      }
    },
    data () {
      return {
        email: null,
        password: null,
        result: null
      }
    },
    mounted () {}
  }
</script>

<style scoped>
</style>
