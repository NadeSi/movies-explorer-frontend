export const callApi = (url, init = {}) => {
  return fetch(`${url}`, init)
    .then((response) => {
      return response.json().then((json) => {
        if (response.ok) {
          return json;
        }
        return Promise.reject({status: response.status, statusText: response.statusText, error: json});
      });
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
