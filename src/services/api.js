import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
});

export const api = {
    getCharacters: (randomCharacters) => axiosInstance.get(`/character/${randomCharacters}`),
    //getEspisodes: (episiode) => axiosInstance.get('episode')
}
