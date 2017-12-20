<template>
  <div>
      <h1>{{msg}}</h1>
      <p>{{$route.params.color}}</p>
      <button @click="getParam">get params</button>
  </div>
</template>

<script>
    export default {
        name: 'Apple',
        data() {
            return {
                msg : 'I am Apple'
            }
        },
        methods: {
            getParam (){
                console.log(this.$route.params);
            }
        }
    }
</script>

<style>

</style>

