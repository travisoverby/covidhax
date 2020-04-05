import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dashboard from '../../../components/Charity/Dashboard';

configure({ adapter: new Adapter });

describe('Dashboard', () => {
  const wrapper = shallow(<Dashboard name="NAME" description="DESCRIPTION" />);

  it('asks for charity name', () => {
    expect(wrapper.html()).toContain('Charity Name');
  });

  it('asks for charity URL', () => {
    expect(wrapper.html()).toContain('URL');
  });

  it('asks for charity description', () => {
    expect(wrapper.html()).toContain('Description');
  });
});
