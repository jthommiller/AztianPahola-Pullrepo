import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, {Search, Table, Button} from './App';
import {mount, shallow} from 'enzyme';

configure({ adapter: new Adapter() });


// Blanket test to make sure testing is working in general
describe('Blanket Test', () => {
    test('Always Pass Test', () => {
      expect(true).toEqual(true);
    });
  });

describe('App', () => {
  const wrapper = mount(<App/>);
  test('Creates Search', () => {
    expect(wrapper.find(Search).length).toEqual(1);
  });

  test('Creates Table', () => {
    expect(wrapper.find(Table).length).toEqual(1);
  })
});

//Additional Coverage Tests - James
describe('Coverage', () => {
  const wrapper = mount(<App/>);
  test('Check Table Button Text Is Correct', () => {
    expect(wrapper.find(Button).text()).toEqual('More');
  });
  test('Check Search Button Text Is Correct', () => {
    expect(wrapper.find(Search).text()).toEqual('Search');
  })
});