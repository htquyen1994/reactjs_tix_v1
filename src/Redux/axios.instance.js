import axios from "axios";
import APIPath from "../Config/api-path.config";

const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
}

const instance = axios.create(
    {
        baseURL: APIPath.BASE_URL
    }
);

export const getAxiosData = (query) => {
    return instance({
        method: METHOD.GET,
        url: `/${query}`
    })
}

export const postAxiosData = (body, query) => {
    return instance({
        method: METHOD.POST,
        url: `/${query}`,
        data: body
    })
};

export const putAxiosData = (body, query) => {
    return instance({
        method: METHOD.PUT,
        url: `/${query}`,
        data: body
    })
}

export const deleteAxiosData = (body, query) => {
    return instance({
        method: METHOD.DELETE,
        url: `/${query}`,
        data: body
    })
}



instance.interceptors.request.use(function (config) {
    // config.headers = { ...config.headers, auth_token: getAuthToken() };
    // you can also do other modification in config
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    if(response.status === 401) {
        // your failure logic
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

