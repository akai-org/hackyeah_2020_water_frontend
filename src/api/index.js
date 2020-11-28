import axios from "axios";
function getCookie(cname) {
  let name = cname + "=";
  console.log(document.cookie)
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';').map(v=>v.trim());
  console.log(ca)
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const send = (url, options = {}, method = "get", headers = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(options);
      if (!navigator.onLine) {
        window.setAlert("error", "Brak dostępu do internetu!");
        reject("Brak dostępu do internetu!");
      }
      const { data } = await axios[method](url, options, headers);
      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
  
export const API = {
  base: process.env.NEXT_PUBLIC_API_URL,
};

export const getUrl = (url, options, method) => send(url, options, method);
export const useApi = (url, options={}, method="get") => {
  const [token, id] = getCookie('token').split("-");
  console.log('cookie:---',token, id)
  return send(url, { id:+id, ...options }, method, {
    headers: {
      Authorization: `Token ${token || ""}`,
    },
  });
};
// export const getExperience = () => useApi(`${API.base}/getexp`);
export const authGoogleBackend = (accessToken) =>
  send(`${API.base}/social/google-oauth2/`, { accessToken }, "post");
export const getProfile = () => useApi(`${API.base}/profile/`);
