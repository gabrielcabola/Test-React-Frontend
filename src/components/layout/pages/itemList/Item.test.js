import React from "react";
import renderer from 'react-test-renderer';
import ItemList from './';
import { articles } from 'services/network/__mocks__/axios';
import { BrowserRouter } from "react-router-dom";

it('renders correctly', () => {
  const a = articles.articles[0];
  const tree = renderer
    .create(<BrowserRouter><ItemList key={1} index={1} item={a}  /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});