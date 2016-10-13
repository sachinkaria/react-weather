import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import CityName from '../app/components/Home';
import CityTemp from '../app/components/Home';
import CityWeather from '../app/components/Home';
import Cities from '../app/components/Home';
import SearchInput from '../app/components/Home';

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

describe('<Cities />', function(){

  it('should have props for data', function(){
    const wrapper = shallow(<Cities />);
    expect(wrapper.props().data).to.be.defined;
  });

  it('contains an <CityName/> component', function () {
    const wrapper = mount(<Cities/>);
    expect(wrapper.find(CityName)).to.have.length(1);
  });
  
  it('contains an <CityWeather/> component', function () {
    const wrapper = mount(<Cities/>);
    expect(wrapper.find(CityWeather)).to.have.length(1);
  });

  it('contains an <CityTemp/> component', function () {
    const wrapper = mount(<Cities/>);
    expect(wrapper.find(CityTemp)).to.have.length(1);
  });
});

describe('<SearchInput />', function () {

  it('should have props for value', function () {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.props().value).to.be.defined;
  });

  it('should have an input field', function () {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper.find('Input')).to.have.length(1);
  });
});
