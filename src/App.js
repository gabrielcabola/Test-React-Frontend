import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticlesPageContainer from 'views/articles/ArticlesPageContainer';
import ArticleShowPage from 'views/articles/ArticlesShowPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ArticlesPageContainer} />
          <Route path="/articles" component={ArticlesPageContainer} />
          <Route path="/article/:id/:file" component={ArticleShowPage} />
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
