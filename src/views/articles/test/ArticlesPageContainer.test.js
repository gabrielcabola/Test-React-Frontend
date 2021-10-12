import React from "react";
import renderer from 'react-test-renderer';
import ArticlesPageContainer from "../ArticlesPageContainer";
import { render, screen } from "@testing-library/react";
import { ActionTypes } from 'store/articles/Articles.actions';
import { ArticleReducer, ArticleInitialState } from 'store/articles/Articles.reducers';
import { articles } from 'services/network/__mocks__/axios';


/**
 * Component
 */
describe("<ArticlesPageContainer />", () => {
  
  beforeEach(() => {
    render(<ArticlesPageContainer />);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<ArticlesPageContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  describe("when page is initialized", () => {
    it("then shows the Loader", () => {
      const Loader = document.getElementById('Loader');
      expect(Loader).toBeTruthy();
    });

    it('handles fetch articles', () => {
      expect(ArticleReducer(ArticleInitialState, { type: ActionTypes.INIT })).toEqual({
        ...ArticleInitialState,
        loading: true,
      });
    });
  });
  
/**
 * Reducers
 */
describe('ArticleReducer', () => {
    
    it('returns the initial state', () => {
      expect(ArticleReducer(undefined, {})).toEqual(ArticleInitialState);
    });
  
    it('handles article request', () => {
      expect(ArticleReducer(ArticleInitialState, { type: ActionTypes.INIT })).toEqual({
        ...ArticleInitialState,
        loading: true,
      });
    });
  
    it('handles article request successful', () => {
      expect(ArticleReducer(ArticleInitialState, {
        type: ActionTypes.COMPLETE,
        payload:articles,
      })).toEqual({
        ...ArticleInitialState,
        completed: true,
        loading: true,
        articles,
      });
    });
});

  /**
   * Actions and Dispatchs
   */

  /**
   * TODOS:
   * 
   * Test Action Types and ispatchs using:
   *  'redux-mock-store'
   *  'redux-thunk'
   * 
   */

});