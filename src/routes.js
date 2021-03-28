import React from 'react';
import Frame from './Containers/Frame';
import { BrowserRouter, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Frame} />
      <Route exact path="/:menuId" component={Frame} />
      <Route exact path="/:menuId/:postId" component={Frame} />
    </BrowserRouter>
  );
}

export default Routes;
