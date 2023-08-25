import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openai.com",
  headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer your-api-auth-key-goes-here`
  },
});

export default api;
