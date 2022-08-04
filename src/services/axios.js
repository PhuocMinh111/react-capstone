import axios from "axios";
import { BASE_URL, TOKEN } from "../constants/constants";
export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN
  }
});
