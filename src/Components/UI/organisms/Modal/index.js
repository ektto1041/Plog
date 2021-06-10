import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: ${props => props.isOpen ? 'flex' : 'none'};
background: rgba(0, 0, 0, 0.6);
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
z-index: 10000;

// 모달 열렸을 경우
&.open-modal {
  // display: flex;
  align-items: center;
  justify-content: center;
}
`;

const Modal = ({
  isOpen,
  closeModal,
  children,
}) => {
  return (
    <Wrapper
      className={isOpen ? 'open-modal' : ''}
      isOpen={isOpen}
      onClick={closeModal}
    >
      <div onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </Wrapper>
  )
}

export default Modal;
