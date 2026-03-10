import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000"
});

export const uploadResume = (formData) =>
  API.post("/upload_resume", formData);

export const getCandidates = () =>
  API.get("/candidates");

export const getBiasReport = () =>
  API.get("/bias_report");

export const getExplainability = (id) =>
  API.get(`/explain/${id}`);