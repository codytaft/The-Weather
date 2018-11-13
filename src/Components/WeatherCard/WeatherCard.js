import React, { Component } from 'react';

class WeatherCard extends Component {
  render() {
    console.log(this.props.forecast);
    return (
      <div className="weather-card">
        <h1>{this.props.forecast.main.temp}hi</h1>
      </div>
    );
  }
}

export default WeatherCard;
