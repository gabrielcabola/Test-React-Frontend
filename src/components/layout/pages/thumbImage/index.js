import React, { Fragment } from "react";
import { ThumbImageHelper } from 'utils/helpers/Image.helper'

export default function ThumbImage(props) {
  const { fileName, model } = props;
  return (
    <Fragment>
      <div className="thumbImage">
        <img src={ThumbImageHelper(fileName)} alt={ model } />
      </div>
    </Fragment>
  );
}