<template>
  <div class="login-view">
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
      <div class="mdl-cell mdl-cell--12-col">
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" @click="login">Log in</button>
        <p>or</p>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <p>
          <button @click="loginWithGoogle" class="social-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Login with Google</button>
        </p>
        <p>or <router-link to="/register">sign up</router-link> for Picturefoods account</p>
      </div>
    </div>
    <div>Login status: {{result}}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

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
          console.log('Login success as user: ' + user.user.email)
          this.result = 'Success'
          this.$router.replace('gallery')
        },
        (err) => {
          this.reportLoginError(err)
        }
      )
    },
    loginWithGoogle: function () {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      firebase.auth().signInWithPopup(provider).then((result) => {
        const user = result.user
        console.log('User is logged in as ' + user.email)
        this.result = 'Success'
        this.$router.replace('gallery')
      }).catch((err) => {
        this.reportLoginError(err)
      })
    },
    reportLoginError (err) {
      console.log('Login failure. ' + err.message)
      this.result = 'Error ' + JSON.parse(err.message).error.code + ', ' + JSON.parse(err.message).error.message
    }
  }
}
</script>
