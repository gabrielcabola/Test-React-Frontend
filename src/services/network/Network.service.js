import axios from 'axios';

// @TODO Add in a ENV file
const baseUrl = process.env.REACT_APP_BACKEND_API_URL;

export const request = async (method, endpoint, payload) => {
  const api = axios.create({
    baseURL: baseUrl,
    timeout: 1500,
  });
  switch (method) {
    case 'GET':
      return await apiGet(api, endpoint);
    case 'POST':
      return await apiPost(api, endpoint);
    case 'DELETE':
      return await apiDelete(api, endpoint);
    default:
      return await apiGet(api, endpoint);
  };
}
  
/**
 * General get API function
 * @param {string} endpoint
 */
 export const apiGet = async (Api, endpoint) => {
  
    return await Api.get(endpoint)
        .then(async (response) => {
            const { data } = response;
            return data;
        }).catch(async (error) => {
            const { response } = error;
            setApiError(response, endpoint)
        });
}

/**
 * General post API function
 * @param {string} endpoint
 */
export const apiPost = async (Api,endpoint, payload) => {     
    return await Api.post(endpoint, payload)
        .then(async (response) => {
            const { data } = response;
            return data;
        }).catch(async (error) => { 
            const { response } = error;            
            setApiError(response, endpoint)
            return response;
        });
}

export const apiDelete = async (Api, endpoint, payload) => {     
    return await Api.delete(endpoint, { data: payload })
        .then(async (response) => {
            const { data } = response;
            return data;
        }).catch(async (error) => { 
            const { response } = error;            
            setApiError(response, endpoint)
            return response;
        });
}

// ERROR / TRACKING HANDLING -----------------
export const setApiError = (err, url) => {
    console.error({
        event: "Checkout Network Error",
        api_url: url,
        message: err
    });
};
