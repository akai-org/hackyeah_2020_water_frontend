import axios from "axios";
const send = (url, options = {}, method = "get") =>
  new Promise(async (resolve, reject) => {
    try {
      if(!navigator.onLine){
        window.setAlert('error','Brak dostępu do internetu!')
        reject('Brak dostępu do internetu!')
      }
      method = method.toLowerCase();
      const { data } = await axios[method](url,options);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
export const API = {
  base: process.env.NEXT_PUBLIC_API_URL+"/api",
};
export const getUrl = (url, options, method) => send(url, options, method);