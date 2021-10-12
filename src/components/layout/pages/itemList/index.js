import React from "react";
import ThumbImage from 'components/layout/pages/thumbImage';
import { Link } from "react-router-dom";

function ItemList(props) {
  const { index, item } = props;
  const { mainImage } = item;
  return (
    <article>
      <Link
          key={index}
          className={`articleLink`}
          to={`/article/${index}/${mainImage.fileName}`}
        >
        <ThumbImage {...mainImage} />
        <h2>{item.model}</h2>
        <h3>{item.manufacturer}</h3>
      </Link>
    </article>
  );
}

export default ItemList;