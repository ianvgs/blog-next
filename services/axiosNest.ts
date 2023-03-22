import axios from "axios";
import * as https from "https";

const axiosNest = axios.create({
    baseURL: process.env.BACKEND_URL,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6",
    },
});



export default axiosNest;
