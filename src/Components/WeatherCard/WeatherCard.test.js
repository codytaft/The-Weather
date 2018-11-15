import React from 'react';
import { shallow } from 'enzyme';
import WeatherCard from './WeatherCard';

describe('WeatherCard', () => {
  let wrapper;
  let mockLocation = 'corsicana';
  let mockForecast = {
    main: '65'
  };

  beforeEach(() => {
    wrapper = shallow(
      <WeatherCard location={mockLocation} forecast={mockForecast} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if location is a city', () => {
    let mockLocation = 'corsicana';
    wrapper = shallow(
      <WeatherCard location={mockLocation} forecast={mockForecast} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if location is a zip code', () => {
    let mockLocation = '75110';
    wrapper = shallow(
      <WeatherCard location={mockLocation} forecast={mockForecast} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
