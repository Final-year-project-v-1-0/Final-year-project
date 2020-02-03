import axios from 'axios';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=';

export const GetMethod = async search => {
    try {
        const response = await axios.get(`${WIKI_URL}${search}`);
        console.log(response.data);
    } catch (err) {
        console.log(err.message);
    }
}