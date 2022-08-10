import api from '../services/apiService';

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }

  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);

    const [counties, cities] = response;
    this.counties = counties;
    this.cities = cities;

    return response;
  }

  //   getCitiesByCountryCode() {
  //     return this.cities.filter((city) => city.country_iso2 === 'AL');
  //   }
}

const locations = new Locations(api);

export default locations;
