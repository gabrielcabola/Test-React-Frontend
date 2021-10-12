import React from "react";
import ItemList from 'components/layout/pages/itemList';

function List(props) {
  const { articles } = props;
  return (
    <section className="List">
      {articles.map((article, i) => {
        return (
          <ItemList key={i} index={i} item={article}>
          </ItemList>
        );
       })}
    </section>
  );
}

export default List;