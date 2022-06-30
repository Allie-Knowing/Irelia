import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import baseURL from "@shared/baseUrl";

const request = axios.create({ baseURL });

export { request };
