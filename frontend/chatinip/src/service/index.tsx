import axios from "axios";

const token: string | null = localStorage.getItem("@token:token");

export const api = axios.create({
  baseURL: "http://192.168.1.97:3030/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
