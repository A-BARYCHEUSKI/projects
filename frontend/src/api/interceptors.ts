import axios from "axios";

import { API_URL } from "../configs/api.config";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;