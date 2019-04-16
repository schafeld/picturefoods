<template>
  <div>
    <img src="../assets/logo-picturefoods-300x80.png" alt="Picturefoods">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone">
        <p>Please <router-link to="/login">log in</router-link> or <router-link to="/register">sign up</router-link> for Picturefoods account</p>
      </div>
      <button @click="logout"> Logout </button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'home',
    methods: {
      logout: function () {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    },
    data () {
      return {}
    },
    mounted () {}
  }
</script>

<style scoped>
</style>
