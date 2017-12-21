<template>
  <div>
      <h1>{{msg}}</h1>
      <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: 'Apple',
        data() {
            return {
                msg : 'I am Banana'
            }
        }
    }
</script>

<style>

</style>
