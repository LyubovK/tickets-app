import axios from 'axios';
import config from '../config/apiConfig';

/**
 * /counties
 * /cities
 * /prices/cheap
 */
class Api {
  constructor() {
    this.url = config.url;
    this.apikey = config.apikey;
  }

  async countries() {
    try {
      const response = await axios.get(
        `${this.url}/countries?&access_key=${this.apikey}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  async cities() {
    try {
      const response = await axios.get(
        `${this.url}/cities?access_key=${this.apikey}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
  prices(params) {}
}

const api = new Api(config);

export default api;
