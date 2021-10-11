import React, { createContext, useEffect } from "react";
import { request } from 'services/network/Network.service';
import { ActionTypes } from 'store/articles/Articles.actions';
import { ArticleReducer, ArticleInitialState } from 'store/articles/Articles.reducers';
import Loader from "components/loader/Loader";
import ArticlesPage from "views/articles/ArticlesPage";

// Create Context Object
export const ArticlesContext = createContext();
// API  fetch
export const fetchArticles = () => request('GET', '/articles');

// Create a provider for components to consume and subscribe to changes
export default function ArticlesPageContainer(props) {
    
   const [state, dispatch] = React.useReducer(ArticleReducer, ArticleInitialState);

    // Fetch the Information from Backend
    useEffect(() => {
        const { loading } = state;
        if (loading === false) {
          dispatch({ type: ActionTypes.INIT });
          fetchArticles().then(({ status, articles }) => {
                  dispatch({
                    type: ActionTypes.COMPLETE,
                    payload: articles
                  });
                }).catch((error) =>
                
                    console.log(error)
                );
        }
    }, [state]);

    const ArticlesModule = (
        <ArticlesContext.Provider value={[state, dispatch]}>
          <ArticlesPage {...state} />
        </ArticlesContext.Provider>
    );
    
    return (state.completed === true) ? ArticlesModule : <Loader />;
};

