export const getFiveDayForecast = (city, zip) => {
  try {
    if (city) {
      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?APPID=${
          process.env.REACT_APP_API_KEY
        }&q=${city}&units=imperial`
      )
        .then(response => response.json())
        .then(data => data.list);
    } else {
      return fetch(
        `http://api.openweathermap.org/data/2.5/forecast?APPID=${
          process.env.REACT_APP_API_KEY
        }&zip=${zip}&units=imperial`
          .then(response => response.json())
          .then(data => data.list)
      );
    }
  } catch (error) {
    console.log(error);
  }
};
