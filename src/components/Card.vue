<template>
    <div :class=" 'card-container flip-card '+ flip ">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img
                        :src="characterList.image"
                        alt="avatar-image"
                >
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

            <div class="flip-card-back" v-if="back && back.name" >
                <p><span>Name:</span> {{ back.name }}</p>
                <p class="medium__item">
                    <span>Air Date:</span> {{ back.air_date }}
                </p>
                <p class="medium__item">
                    <span>Episode Number:</span> {{ back.episode }}
                </p>
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
    .card-container {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        -moz-osx-font-smoothing: grayscale;
        perspective: 1000px;
    }
    img {
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
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
    .card-container{
        text-align: left;
        padding-left: 5%;
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

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {

    }

    /* Style the back side */
    .flip-card-back {
        padding-bottom: 50%;
        transform: rotateY(180deg);
    }
</style>
