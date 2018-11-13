import React, { Component } from 'react';
import './WeatherCard.css';
class WeatherCard extends Component {
  render() {
    return (
      <div className="weather-card">
        <h1>{this.props.location}</h1>
        <h2>{this.props.forecast.dt_txt}</h2>
        <h2>{Math.round(this.props.forecast.main.temp)}˚</h2>
      </div>
    );
  }
}

export default WeatherCard;
