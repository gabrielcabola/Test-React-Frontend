import { log } from 'services/logger/Logger.service';
import { ActionTypes } from 'store/articles/Articles.actions';

export const ArticleInitialState = {
  articles: [],
  articleViewActive: null,
  loading: false,
  gridSize: 10,
};

export const ArticleReducer = (state, action) => {
  log('ArticleReducer Dispatch', {type: action.type, payload: action.payload });
  switch (action.type) {
      case ActionTypes.INIT:
          return {
              ...state,
              loading: true
          };
      case  ActionTypes.COMPLETE:
            return {
                ...state,
              articles: action.payload,
              loading: true
            };
      case  ActionTypes.ACTIVE_ARTICLE:
          return {
              ...state,
              articleViewActive: action.payload
          };
      default:
          throw new Error();
  }
};