import axios from "axios";

const baseURL = `https://api.sampleapis.com/futurama/`


export const greetingInfo = () => {
    return axios.get(baseURL + 'info')
}


export default class FuturamaApi {
    static async getCharacters() {
        const response = await axios.get(baseURL + 'characters?_limit=15')
        return response.data
    }

    static async getCast() {
        const response = await axios.get(baseURL + 'cast')
        return response.data
    }

    static async getEpisodes() {
        const response = await axios.get(baseURL + 'episodes')
        return response.data
    }

}