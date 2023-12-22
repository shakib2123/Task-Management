import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-managment-server-liart.vercel.app",
});
const useAxios = () => {
  return instance;
};

export default useAxios;
