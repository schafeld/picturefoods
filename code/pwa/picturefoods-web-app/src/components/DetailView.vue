<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <router-link to="../">
          <img :src="image.url" />
        </router-link>
      </div>
      <div class="info">
        <span>{{ image.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ image.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { find } from 'lodash'

  export default {
    data () {
      return {
        image: {}
      }
    },
    methods: {
      getImage () {
        if (navigator.onLine) {
          return find(this.$root.imageCatalog, (imageCatalog) => imageCatalog['.key'] === this.$route.params.id)
        } else {
          return find(JSON.parse(localStorage.getItem('images')), (imageCatalog) => imageCatalog['.key'] === this.$route.params.id)
        }
      }
    },
    mounted () {
      // this.image = find(this.$root.imageCatalog, (imageCatalog) => imageCatalog['.key'] === this.$route.params.id)
      this.image = this.getImage()
    }
  }
  </script>
