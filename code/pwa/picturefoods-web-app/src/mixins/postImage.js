// postCat
const postImage = {
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

export default postImage
