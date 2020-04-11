<template>
    <div :class=" 'card-container flip-card '+ flip ">
        <div class="flip-card-inner">
            <div class="flip-card-front" v-if="!flip">
                <img
                        :src="characterList.image"
                        alt="avatar-image"
                >
                <div class="cardmeta">
                <p><span>Name:</span> {{ characterList.name }}</p>
                <p class="medium__item">
                    <span>Status:</span> {{ characterList.status }}
                </p>
                <p class="medium__item">
                    <span>Species:</span> {{ characterList.species }}
                </p>

                <span>Episodes:</span>
                <ul>
                    <li v-for="episode in episodes" :key="episode.id" @click="showBack(episode)">{{ episode.name }}</li>
                </ul>
                </div>
            </div>

            <div class="flip-card-back cardmeta" v-if="flip" >
                <p><span>Name:</span> {{ back.name }}</p>
                <p class="medium__item">
                    <span>Air Date:</span> {{ back.air_date }}
                </p>
                <p class="medium__item">
                    <span>Episode Number:</span> {{ back.episode }}
                </p>
                <p class="last__item">
                    <span>Created on:</span> {{back.created.split('T')[0]}}
                </p>
                <!--{{back.characters}}-->
                <span>Characters:</span>
                <!--<ul>
                <li v-for="char in chars" :key="char.id">{{ char.name }}</li>
            </ul>-->
                <button @click="showFront">Go Back</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Card",
        props: ['characterList'],

        data() {
            return {
                episodes: [],
                back: null,
                flip: ''
            }
        },
        created() {
            for (let i = 0; i < this.characterList.episode.length; i++) {
                axios.get(this.characterList.episode[i])
                    .then(response => response.data)
                    .then(data => {
                        this.episodes.push(data);
                    });
            }
            /*for (let i = 0; i < this.back.characters.length; i++) {
                axios.get(this.back.characters[i])
                    .then(response => response.stuff)
                    .then(stuff => {
                        this.chars.push(stuff);
                    });
            }
*/
        },
        methods: {
            showBack(episode){
                this.back = episode;
                this.flip = 'flip';

            },
            showFront() {
                this.flip = '';
            }
        }
    }

</script>

<style scoped>
    .cardmeta{
        padding-left: 15px;
    }
    .card-container {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        -moz-osx-font-smoothing: grayscale;
        perspective: 1000px;
        text-align: left;
    }
    img {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        width: 100%;
    }
    .medium__item{
        margin-top: 5px;
    }
    .last__item{
        margin-bottom: 20px;
        margin-top: 5px;
    }
    span {
        font-weight: bold;
        font-size: 14px;
    }

    .flip-card {
        position: relative;
        perspective: 1000px; /* Remove this if you don't want the 3D effect */
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;

        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card.flip .flip-card-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
        /*//position: absolute;*/
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    /* Style the back side */
    .flip-card-back {
        transform: rotateY(180deg);
    }
</style>
