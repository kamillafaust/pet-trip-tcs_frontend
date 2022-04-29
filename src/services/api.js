import axios from "axios";

const api = axios.create({
  baseURL: "http://pettrip-tcs.herokuapp.com",
});

export default api;
