import React from "react";
import List from 'components/layout/pages/list';

export default function ArticlesPage(props) {
  return (
    <div className="ArticlesPage">
      <List {...props}>
      </List>
    </div>
  );
}