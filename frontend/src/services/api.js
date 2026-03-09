import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const uploadResume = (formData) =>
  API.post("/resume/upload", formData);

export const getCandidates = () =>
  API.get("/candidate/all");

export const getBiasMetrics = () =>
  API.get("/analytics/bias");

export default API;