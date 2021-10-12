import React from "react";
import renderer from 'react-test-renderer';
import ThumbImage from './';

it('renders correctly', () => {
  const tree = renderer
    .create(<ThumbImage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});