import React, { Component } from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';

const CardContainer = forecasts => {
  console.log(forecasts);
  if (forecasts.forecasts.length > 0) {
    console.log(forecasts);
    return forecasts.forecasts.map(forecast => {
      return <WeatherCard forecast={forecast} />;
    });
  } else {
    return <div />;
  }
};

export default CardContainer;
