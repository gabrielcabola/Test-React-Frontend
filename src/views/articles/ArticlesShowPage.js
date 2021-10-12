import React from "react";
import { useParams, Link } from "react-router-dom";
import FullImage from 'components/layout/pages/fullImage';
import Header from 'components/layout/header';

export default function ArticleShowPage(props) {
  let { id, file } = useParams();
  return (
    <div className="ArticlesPage">
      <Link
          className={`backButton`}
          to={`/articles`}
        >Back</Link>
      <FullImage filename={file} />
    </div>
  );
}