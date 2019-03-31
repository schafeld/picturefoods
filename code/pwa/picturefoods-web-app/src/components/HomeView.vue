<template>
  <div>
    <img src="../assets/logo-picturefoods-72x72.png" alt="Picturefoods PWA">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="picture in getImages()" class="image-card" :key="picture.id" @click="displayDetails(picture['.key'])">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <span>{{ picture.comment }}</span>
          </div>
        </div>
      </div>
    </div>
    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
      <i class="material-icons">add</i>
    </router-link>
  </div>
</template>

<script>
  export default {
    methods: {
      displayDetails (id) {
        this.$router.push({name: 'detail', params: { id: id }})
      },
      getImages () {
        if (navigator.onLine) {
          this.saveImagesToCache()
          return this.$root.imageCatalog
        } else {
          return JSON.parse(localStorage.getItem('images'))
        }
      },
      saveImagesToCache () {
        this.$root.$firebaseRefs.imageCatalog.orderByChild('created_at').once('value', (snapshots) => {
          let cachedImages = []
          snapshots.forEach((snapshot) => {
            let cachedImage = snapshot.val()
            cachedImage['.key'] = snapshot.key
            cachedImages.push(cachedImage)
          })
          localStorage.setItem('images', JSON.stringify(cachedImages))
        })
      }
    },
    data () {
      return {}
    },
    mounted () {
      this.saveImagesToCache()
    }
  }
</script>

<style scoped>
  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card.clickable {
    cursor: pointer;
  } 
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
</style>
