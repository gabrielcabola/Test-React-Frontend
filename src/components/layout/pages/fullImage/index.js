import React, { Fragment } from "react";
import { FullImageHelper } from 'utils/helpers/Image.helper'

export default function FullImage(props) {
  const { filename } = props;
  return (
    <Fragment>
      <div className="fullImage">
        <img src={FullImageHelper(filename)} alt={ filename } />
      </div>
    </Fragment>
  );
}