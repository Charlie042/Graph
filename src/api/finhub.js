import axios from "axios";

const TOKEN = "cokcl81r01qq4pkuj38gcokcl81r01qq4pkuj390"

export default axios.create({
    baseURL : "https://finnhub.io/api/v1",
    params :{
        token: TOKEN
    }
})