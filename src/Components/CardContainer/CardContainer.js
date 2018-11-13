import React from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import './CardContainer.css';

const CardContainer = props => {
  if (props.forecasts) {
    return (
      <div className="card-container">
        {props.forecasts.map((forecast, i) => {
          return <WeatherCard forecast={forecast} location={props.location} />;
        })}
      </div>
    );
  } else {
    return (
      <div>
        <p className="error-msg">Please input a Zip Code or City</p>
      </div>
    );
  }
};

export default CardContainer;
