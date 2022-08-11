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

    const [countries, cities] = response;
    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.shortCitiesList = this.createShortCitiesList(this.cities);

    return response;
  }

  createShortCitiesList(cities) {
    return Object.entries(cities).reduce((acc, [key]) => {
      console.log(key);
      acc[key] = null;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    /* {'country.country_iso2': {...}} */
    return countries.reduce((acc, country) => {
      acc[country.country_iso2] = country;
      return acc;
    }, {});
  }

  serializeCities(cities) {
    /* {'city name, coutry name': {...}} */

    return cities.reduce((acc, city) => {
      const coutryName = this.getCountryNameByCode(city.country_iso2);
      const key = `${city.city_name},${coutryName}`;
      acc[key] = city;
      return acc;
    }, {});
  }

  getCountryNameByCode(countryIso) {
    return !this.countries[countryIso]
      ? countryIso
      : this.countries[countryIso].country_name;
  }
}

const locations = new Locations(api);

export default locations;
