<template>
    <div>
        <h2>{{msg}}</h2>
        <button type="button" @click="addnumber()" value="add number">add number</button>
        <button type="button" @click="reducenumber()" value="reduce number">reduce number</button>
    </div>
</template>

<script>
export default {
    data (){
        return {
            msg: "I'm Apple",
            price: 5
        }
    },
    methods: {
        addnumber (){
            // this.$store.commit('increment', this.price);
            this.$store.dispatch('increase', this.price)
        },
        reducenumber (){
            //this.$store.commit('decrement', this.price);
            this.$store.dispatch('decrease', this.price)
        }
    }
}
</script>

<style>

</style>
