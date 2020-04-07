<template>
    <div class="filter">
        <div class="tabs">
            <div class="tab" @click="change" v-for="n in 10">

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab",
        data(){
            return {

            }
        },
        props:['list'],
        mode:{
            prop:'active',
            event:'changeActive'
        },
        methods:{
            change(){
                
            }
        }
    }
</script>

<style scoped>

</style>
