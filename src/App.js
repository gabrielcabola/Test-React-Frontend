import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ArticlesPageContainer from 'views/articles/ArticlesPageContainer';
import Header from 'components/layout/header';

import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
    <BrowserRouter>
      <Route path="/" component={ArticlesPageContainer} />
      <Route path="/articles" component={ArticlesPageContainer} />
      </BrowserRouter>
    </div>
  );
}

export default App;
