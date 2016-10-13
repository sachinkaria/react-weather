import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import CityName from '../app/components/Home';
import CityTemp from '../app/components/Home';
import CityWeather from '../app/components/Home';


describe('<CityName />', function () {

  it('should have props for name', function () {
    const wrapper = shallow(<CityName />);
    expect(wrapper.props().name).to.be.defined;
  });
});

describe('<CityTemp />', function () {

  it('should have props for temperature', function () {
    const wrapper = shallow(<CityName />);
    expect(wrapper.props().temperature).to.be.defined;
  });
});

describe('<CityWeather />', function () {

  it('should have props for weather', function () {
    const wrapper = shallow(<CityName />);
    expect(wrapper.props().weather).to.be.defined;
  });
});
