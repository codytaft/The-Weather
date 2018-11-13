import React, { Component } from 'react';
import './Search.css';
import { getFiveDayForecast } from '../../Helpers/FetchCalls';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSearch = async e => {
    if (this.state.searchInput) {
      this.props.setForecasts([]);
      this.props.setLocation(this.state.searchInput);
      let forecasts;
      e.preventDefault();
      e.persist();
      if (this.state.searchInput.includes([0 - 9])) {
        forecasts = await getFiveDayForecast(null, this.state.searchInput);
        this.props.setForecasts(forecasts);
      } else {
        forecasts = await getFiveDayForecast(this.state.searchInput, null);
        this.props.setForecasts(forecasts);
      }
      e.target.reset();
    } else {
      this.props.setLocation('');
      this.props.setForecasts([]);
    }
  };

  render() {
    return (
      <form className="search-bar-section" onSubmit={this.handleSearch}>
        <input
          type="text"
          value={this.searchInput}
          name="searchInput"
          placeholder="Search City or Zip Code"
          className="search-bar"
          onChange={this.handleInputChange}
        />
        <button className="search-btn">Search</button>
        <p className={this.state.error ? 'error-msg' : 'hidden'}>
          Please input correct Zip Code or City
        </p>
      </form>
    );
  }
}

export default Search;
