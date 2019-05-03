<template>
  <div>
    <img src="../assets/logo-picturefoods-300x80.png" alt="Picturefoods">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--12-col">
        <p>You are currently <span v-if="!user">not </span>logged<span> in as: <b>{{user.email}}</b></span>.</p>
        <p>Your user id is: <b>{{user.uid}}</b></p>
        <p>User created: <b>{{user.metadata.creationTime}}</b></p>
        <p>Last login: <b>{{user.metadata.lastSignInTime}}</b></p>
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
    getUser: function () {
      this.user = firebase.auth().currentUser
    },
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
  data () {
    return {
      user: { metadata: '' }
    }
  },
  mounted () {
    this.getUser()
  }
}
</script>

<style scoped>
</style>
