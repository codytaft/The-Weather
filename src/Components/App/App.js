import React, { Component } from 'react';
import './App.css';
import Search from '../Search/Search';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      forecasts: [],
      location: ''
    };
  }

  setForecasts = forecasts => {
    this.setState({ forecasts });
  };

  setLocation = location => {
    this.setState({ location });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Weather</h1>
        </header>
        <Search
          setForecasts={this.setForecasts}
          setLocation={this.setLocation}
        />
        <CardContainer
          forecasts={this.state.forecasts}
          location={this.setState.location}
        />
      </div>
    );
  }
}

export default App;
