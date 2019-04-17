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
      <button class="mdl-cell mdl-cell--1-col" @click="register">Sign up</button>
      <p>Or <router-link to="/login">log in</router-link></p>
    </div>
    <div>Login {{email}}, password: {{password}} </div>
    <div>Signup result: {{result}}</div>
  </div>
</template>

<script>
  import firebase from 'firebase'

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
