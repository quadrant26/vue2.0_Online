<template>
  <div id="app">
    <p><img src="./assets/logo.png"></p>
    <router-view></router-view>
    <br>
    <br>

    <router-link to="/apple">to Apple</router-link>
    <br>
    <br>
    <router-link :to="'/apple'">to Apple</router-link>
    <br>
    <br>
    <router-link :to="{path: '/apple/green'}">to Apple</router-link>
    <br>
    <br>
    <router-link :to="{path: '/banana'}">to Banana</router-link>
    <br>
    <br>
    <router-link :to="{path: '/banana/yellow'}">to YellowBanana</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
  text-align: center;
}
</style>
