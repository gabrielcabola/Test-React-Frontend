import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import ItemList from 'components/layout/pages/itemList';

function List(props) {
  const { articles } = props;
  return (
    <section className="List">
      {articles.map((article, i) => {
        return (
          <ItemList key={i} item={article}>
            <Link
            key={article.model}
            className={`articleLink`}
            to={`/article/${article.model}`}
          >
              <h2>{article.model}</h2>
              <h3>{article.manufacturer}</h3>
            </Link>
          </ItemList>
        );
       })}
    </section>
  );
}

export default withRouter(List);