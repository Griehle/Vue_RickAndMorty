<template>
    <div class="card-list">
        <Card
                v-for="character in characters"
                :key="character.id"
                :character-list="character"
        />
    </div>
</template>

<script>
    import Card from '../components/Card.vue';
    import { api } from '../services/api';

    export default {
        name: "Home",
        components: {
            Card
        },
        data() {
            return{
                characters: {}
            }
        },
        created(){
            this.characters = api.getCharacters(this.rangeCharacter())
            .then(response => response.data)
            .then(data => {
                this.characters = data
            })
        },
        methods: {
            rangeCharacter() {
                const randomic = () => parseInt(Math.random() * (493 - 1) + 1)
                return Array(8).fill(0).reduce(item => [...item, randomic()], []).toString()
            },
            /*filterCharacters() {
                let char =
            }*/
        }
    }
</script>

