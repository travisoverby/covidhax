import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Details from '../../../components/Charity/Details';

configure({ adapter: new Adapter });

describe('Details', () => {
  const wrapper = shallow(<Details name="NAME" description="DESCRIPTION" />);

  it('Displays name', () => {
    expect(wrapper.html()).toContain('NAME');
  });

  it('Displays description', () => {
    expect(wrapper.html()).toContain('DESCRIPTION');
  });
});
