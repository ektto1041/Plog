import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/UI/organisms/Header';
import Home from 'Components/pages/Home';
import Board from 'Components/pages/Board';
import Footer from '../Footer';

// flex container
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  background: gold;

  // body 영역 공통 css
  .body {
    width: 100%;
    flex: 1;
  }
`;

const Frame = ({
  history,
}) => {
  return (
    <Wrapper>
      <Header history={history} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:menuId" component={Board} />
        <Route exact path="/post/:menuId/:postId" component={Board} />

        <Route exact path="/board" component={Board} />
      </Switch>
      <Footer />
    </Wrapper>
  );
};

export default Frame;
