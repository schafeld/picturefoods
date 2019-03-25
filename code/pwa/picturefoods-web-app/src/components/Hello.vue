<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Picturefoods is <em>GO!</em></h2>
    <p>This will be the smoothiest AI you'll ever see... 😎🍹</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Picturefoods PWA'
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
