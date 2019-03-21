import axios from 'axios';

const API_KEY = "c8be447f2fmsh8b69856e05c5eabp15fbddjsn3e802df8802d";

const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers: {'X-RapidAPI-Key': API_KEY}
});

export function getAlbums(search = "eminem"){
    const albums = request.get(`search?q=${search}`)
                    .then(response => response.data.data)
                    .catch(error => console.log(error));
    return albums;
}