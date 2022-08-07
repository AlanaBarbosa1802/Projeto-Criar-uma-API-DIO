import axios from "axios";
const Api = axios.create({
    baseURL:'http:/10.0.0.126:3000'
})

export default Api;