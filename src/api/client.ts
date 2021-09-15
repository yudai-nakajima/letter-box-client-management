import axios, { AxiosInstance } from 'axios';
import Cookie from 'js-cookie';

const createHeader = (jwt: string | undefined) => {
  if (jwt) {
    return {
      'content-type': 'application/json',
      authorization: jwt,
    };
  }

  return {
    'content-type': 'application/json',
  };
};

const createAxiosClient = (): AxiosInstance => {
  const jwt = Cookie.get('jwt');

  const headers = createHeader(jwt);

  return axios.create({ headers, withCredentials: true });
};

export default createAxiosClient;
