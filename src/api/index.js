import axios from "axios";
import { useCookies } from "react-cookie";
const send = (url, options = {}, method = "get", auth = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(options);
      if (!navigator.onLine) {
        window.setAlert("error", "Brak dostępu do internetu!");
        reject("Brak dostępu do internetu!");
      }
      const { data } = await axios[method](url, options, auth);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
export const API = {
  base: process.env.NEXT_PUBLIC_API_URL,
};
export const getUrl = (url, options, method) => send(url, options, method);
export const useApi = (url, options, method) => {
  console.log(document.cookie.accessToken);
  return send(url, options, method, {
    headers: {
      Authorization: `Basic ${document.cookie.accessToken || ""}`,
    },
  });
};
export const getExperience = () => useApi(`${API.base}/getexp`);
export const authBackend = (accessToken) =>
  send(`${API.base}/social/google-oauth2/`, {accessToken}, "post");
