import React, { Fragment } from "react";
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
            className={`h-12 flex items-center  border-white cursor-pointer no-underline`}
            to={`/article/${article.model}`}
          >
            {article.model}
            </Link>
          </ItemList>
        );
       })}
    </section>
  );
}

export default withRouter(List);