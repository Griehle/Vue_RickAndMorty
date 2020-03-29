<template>
    <li class="photo" v-for="character in characters" v-bind:key="character.id">
        <img v-bind:src="character.image" />
        <span class="author">{{ character.name }}</span>
    </li>
</template>


<script>

    export default {
        name: "FilterCard",
        props: ['characterList'],

        created(){
            this.characters = api.getCharacters()
                .then(response => response.data)
                .then(data => {
                    this.characters = data
                })
        }

    }
</script>

<style scoped>

</style>
