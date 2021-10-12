import React from "react";
import renderer from 'react-test-renderer';
import List from './';
import { articles } from 'services/network/__mocks__/axios';
import { BrowserRouter } from "react-router-dom";

it('renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><List {...articles}  /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
