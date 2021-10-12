import React from "react";
import { useParams, Link } from "react-router-dom";
import FullImage from 'components/layout/pages/fullImage';

export default function ArticleShowPage(props) {
  let { id, file } = useParams();
  console.log({id, file });
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