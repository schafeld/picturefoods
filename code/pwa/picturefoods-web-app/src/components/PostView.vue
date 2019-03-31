<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.imageUrl" :width="this.imageWidth" :height="this.imageHeight" class="featured" />
          <div class="indicator text" v-if="state === 'idle' || state === 'loading'">Loading...</div>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe image</label>
        </div>
        <div class="actions">
          <a @click.prevent="postImage" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Save image
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  // import parse from 'xml-parser'
  import axios from 'axios'

  export default {
    data () {
      return {
        'image': null,
        'imageUrl': '',
        'imageWidth': 0,
        'imageHeight': 0,
        'title': '',
        'state': 'idle'
      }
    },
    mounted () {
      /* This might work without API key
      this.$http.get('https://api.thecatapi.com/v1/images/search').then(response => {
        this.catUrl = response.body[0].url
      })
      */
      let that = this
      try {
        that.state = 'loading'
        axios.defaults.headers.common['x-api-key'] = 'ba5cdaca-5476-4e28-a8ef-c7b65b0e1bbb'
        // Ask for 1 Image, at full resolution
        axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: 'full' } })
          .then(function (response) {
            // the response is an Array, so just use the first item as the Image
            that.image = response.data[0]
            console.table(that.image)
            console.log('-- Image from TheCatAPI.com')
            console.log('id:', that.image.id)
            console.log('url:', that.image.url)

            that.imageUrl = that.image.url
            that.imageWidth = that.image.widht
            that.imageHeight = that.image.height

            that.state = 'done'
          })
      } catch (err) {
        console.log(err)
      }
    },
    methods: {
      postImage () {
        this.$root.$firebaseRefs.imageCatalog.push(
          {
            'url': this.imageUrl,
            'comment': this.title,
            'info': 'Posted by Me on Someday',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/'))
      }
    }
  }
</script>

<style>
  .waiting {
    padding: 10px;
    color: #555;
  }
  .card-image__picture {
    background: lightblue;
    border: 2px solid cornflowerblue;
    display: inline-block;
    width: auto;
    margin: 1em auto;
    padding: 1em;
  }
  img.featured {
      max-width: 65vw;
  }
</style>
