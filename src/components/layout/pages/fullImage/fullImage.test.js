import React from "react";
import renderer from 'react-test-renderer';
import FullImage from './';

it('renders correctly', () => {
  const tree = renderer
    .create(<FullImage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});