import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

import Charity from '../../../components/Charity';

configure({ adapter: new Adapter });

describe('Charity List', () => {
  describe('No Charities', () => {
    const wrapper = shallow(<Charity />);

    it('displays message', () => {
      expect(wrapper.find(Alert)).toHaveLength(1)
    });
  });

  describe('Has charities', () => {
    const charities = [
      { name: 'charity_1' },
      { name: 'charity_2' },
      { name: 'charity_3' },
    ];

    const wrapper = shallow(<Charity charities={charities} />);

    it('Shows as many charities', () => {
      expect(wrapper.find(ListGroup.Item)).toHaveLength(3)
    });

    it('Shows charity names', () => {
      charities.forEach((charity) => expect(wrapper.html()).toContain(charity.name))
    })
  });
});
