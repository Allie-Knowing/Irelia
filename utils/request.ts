import axios from "axios";
import baseURL from "@shared/baseURL";

const request = axios.create({ baseURL });

export { request };
