import axios from 'axios';
import { TOKEN } from '../config';
// import * as rax from 'retry-axios';

const axiosApiInstance = axios.create({
  withCredentials: false,
});
axiosApiInstance.defaults.raxConfig = {
  // instance: axiosApiInstance,
};

// rax.attach(axiosApiInstance);

const API = async ({ url, method, config, data, params }) => {
  try {
    const response = await axiosApiInstance
      .request({
        url,
        method,
        withCredentials: false,
        data,
        params,
        ...config,
        // raxConfig: {
        //   shouldRetry: err => {
        //     const cfg = rax.getConfig(err);
        //     if (cfg.currentRetryAttempt >= cfg.retry) return false;
        //     return true;
        //   },
        // },
      })
      .catch(error => {
        throw error.response;
      });
    return { response };
  } catch (err) {
    console.log(err.status);
    return { err };
  }
};

axiosApiInstance.interceptors.request.use(
  async config => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${TOKEN}`,
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export default API;
