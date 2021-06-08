import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/UI/organisms/Header';
import Home from 'Components/pages/Home';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: gold;
  align-items: center;
`;

const Frame = () => {
  return (
    <Wrapper>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:menuId" component={Frame} />
        <Route exact path="/:menuId/:postId" component={Frame} />
      </Switch>
    </Wrapper>
  );
};

export default Frame;
