const API_ROOT = "http://localhost:8000/api/v1/word"; //taking out the common part of api

export const APIUrls = {
  // writing all the api's here
  create: () => `${API_ROOT}/create`,
  search: () => `${API_ROOT}/search`,
  fetchWords: () => `${API_ROOT}/fetchWords`,
};
