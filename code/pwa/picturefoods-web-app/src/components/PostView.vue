<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
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
        'catUrl': null,
        'title': '',
        'image': {url: ''}
      }
    },
    mounted () {
      /* this.$http.get('https://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(response => {
        this.catUrl = parse(response.body).root.children['0'].children['0'].children['0'].children['0'].content */
      /*
      // This only works locally
      this.$http.get('https://api.thecatapi.com/v1/images/search').then(response => {
        this.catUrl = response.body[0].url
      })
      */
      let that = this
      try {
        axios.defaults.headers.common['x-api-key'] = 'ba5cdaca-5476-4e28-a8ef-c7b65b0e1bbb'
        // Ask for 1 Image, at full resolution
        axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit: 1, size: 'full' } })
          .then(function (response) {
            // the response is an Array, so just use the first item as the Image
            that.image = response.data[0]
            console.log('-- Image from TheCatAPI.com')
            console.log('id:', that.image.id)
            console.log('url:', that.image.url)
            that.catUrl = that.image.url
          })
      } catch (err) {
        console.log(err)
      }
    },
    methods: {
      postCat () {
        this.$root.$firebaseRefs.cat.push(
          {
            'url': this.catUrl,
            'comment': this.title,
            'info': 'Posted by Me on Someday',
            'created_at': -1 * new Date().getTime()
          })
          .then(this.$router.push('/'))
      }
    }
  }
</script>

<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
</style>
