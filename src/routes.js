import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Frame from 'Components/pages/Frame';
// import Frame from 'Containers/Frame';
import theme from './utils/theme';

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Frame} />
        {/* <Route exact path="/:menuId" component={Frame} />
        <Route exact path="/:menuId/:postId" component={Frame} /> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Routes;
