import React, { Fragment } from "react";
import { withRouter } from "react-router";
import ThumbImage from 'components/layout/thumbImage';

function ItemList(props) {
  const { item } = props;
  const { mainImage } = item;
  return (
    <article>
      <ThumbImage {...mainImage} />
      {props.children}
    </article>
  );
}

export default withRouter(ItemList);