import { ApiKey } from './ApiKey';
import { cleanFiveDayForecast } from './Cleaners';

export const getFiveDayForecast = (city, zip) => {
  try {
    if (city) {
      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?APPID=${ApiKey}&q=${city}`
      )
        .then(response => response.json())
        .then(data => data.list);
    } else {
      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?APPID=${ApiKey}&zip=${zip}`
          .then(response => response.json())
          .then(data => data.list)
      );
    }
  } catch (error) {
    console.log(error);
  }
};
