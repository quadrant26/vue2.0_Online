<template>
    <div>
        <h2>{{ msg }}</h2>
        <button type="button"　@click="addone()" value="add number">add number</button>
        <button type="button" @click="reduceone()" value="reduce number">reduce number</button>
    </div>
</template>

<script>
export default {
    data (){
        return {
            msg : "I'm Banana",
            price: 10
        }
    },
    methods:　{
        addone (){
            this.$store.dispatch('increase', this.price)
        },
        reduceone (){
            this.$store.commit('decrement', this.price)
        }
    }
}
</script>

<style>

</style>
