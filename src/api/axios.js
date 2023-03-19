import axios from "axios";

const Client = axios.create({
  // baseURL: "https://api.bikunku.com",
  // baseURL: "http://localhost:8000",
  baseURL: "https://bikunku-be.fly.dev",
  timeout: 1000,
});

export default Client;
