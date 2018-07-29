import API_BASE_URL from "../config";
import axios,{AxiosRequestConfig}  from "axios";

const axiosInstance = axios.create({
    baseURL:API_BASE_URL,
    timeout:10*1000,
} as AxiosRequestConfig);
