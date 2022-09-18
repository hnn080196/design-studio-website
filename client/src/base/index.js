import axios from "axios";
import { DOMAIN, TOKEN } from "config/config";

export class BaseServices {
  put = (url, model) => {
    return axios({
      baseURL: DOMAIN,
      url: url,
      method: "PUT",
      data: model,
      headers: { "Content-Type": "application/json", token: localStorage.getItem(TOKEN) }
    });
  };
  post = (url, model, headers) => {
    return axios({
      baseURL: DOMAIN,
      url: `localhost:8989${url}`,
      data: model,
      headers: headers
    });
  };
  get = (url) => {
    return axios({
      baseURL: DOMAIN,
      url: url,
      method: "GET",
      headers: { "Content-Type": "application/json", token: localStorage.getItem(TOKEN) }
    });
  };
  delete = (url) => {
    return axios({
      baseURL: DOMAIN,
      url: url,
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: localStorage.getItem(TOKEN) }

      // headers: { Authorization: `Bearer ${localStorage.getItem(TOKEN)}` }
    });
  };
}
