<template>
  <div>
    <img src="../assets/logo-picturefoods-300x80.png" alt="Picturefoods">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p>You have to <router-link to="/login">log in</router-link> or <router-link to="/register">sign up</router-link> for a Picturefoods account.</p>
        <p>You are currently <span v-if="!user">not </span>logged<span> in as <b>{{user.email}}</b></span>.</p>
      </div>
      <div class="mdl-cell mdl-cell--12-col">
        <button @click="logout" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" > Logout </button>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'home',
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    getUser: function () {
      this.user = firebase.auth().currentUser
    }
  },
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style scoped>
</style>
