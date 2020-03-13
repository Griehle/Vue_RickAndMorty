<template>
    <div class="card-container">
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
        <li>{{ episode.name }}</li>
        </ul>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Card",
        props: ['characterList'],

        data() {
            return{
                episode: []
            }
        },
        created(){
            this.episode = axios.get(this.characterList.episode)
                .then(response => response.data)
                .then(data => {
                    this.episode = data
                }).map(this.episode.name)
            }
    }

</script>

<style scoped>
    .card-container {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border-radius: 20px;
        cursor: pointer;
        -moz-osx-font-smoothing: grayscale;
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
</style>
