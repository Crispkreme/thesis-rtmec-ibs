import axios from "axios";

const API_BASE_URI = (window as any).env.API_BASE_URI

const apiService = axios.create({
    baseURL: API_BASE_URI,
    headers: {
        "Content-Type": "application/json"
    }
})