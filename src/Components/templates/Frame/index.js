import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Header from 'Components/UI/organisms/Header';
import Home from 'Components/pages/Home';
import Board from 'Components/pages/Board';
import Footer from '../Footer';

import Modal from 'Components/UI/organisms/Modal';
import LoginForm from 'Components/UI/organisms/LoginForm';

// flex container
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  // body 영역 공통 css
  .body {
    width: 90%;
    flex: 1;
  }
`;

const Frame = ({
  history,
  isModalOpen,
  openModal,
  closeModal,
}) => {
  return (
    <Wrapper>
      {/* 헤더 */}
      <Header
        openModal={openModal}
        history={history}
      />

      {/* 라우터 */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:menuId" component={Board} />
        <Route exact path="/post/:menuId/:postId" component={Board} />

        <Route exact path="/board" component={Board} />
      </Switch>
      <Footer />

      {/* 로그인 모달 */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
      >
        <LoginForm />
      </Modal>
    </Wrapper>
  );
};

export default Frame;
