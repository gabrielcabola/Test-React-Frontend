import React, { Fragment } from "react";
import List from 'components/layout/pages/list';
import Header from 'components/layout/header';

export default function ArticlesPage(props) {
  return (
  <Fragment>
      <Header title='Thomann Articles' />
    <div className="ArticlesPage">
      <List {...props}>
      </List>
      </div>
  </Fragment>
  );
}