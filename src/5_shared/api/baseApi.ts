import * as axios from "axios";


export const baseApi = axios.create({
    baseURL: "https://www.freetogame.com/api",
});