import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
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

const Modal = ({ isOpen, closeModal, children }) => {
  // 모달을 열면 document에 'keydown' 이벤트 리스너 추가
  useEffect(() => {
    document.onkeydown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    return () => {
      document.onkeydown = null;
    };
  }, []);

  return (
    <Wrapper
      className={isOpen ? "open-modal" : ""}
      isOpen={isOpen}
      onClick={closeModal}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </Wrapper>
  );
};

// 모달 닫기
function close() {
  const modal = document.getElementById("plog-modal");
  if (modal) {
    modal.remove();
    document.onkeydown = null;
  }
}

// 확인용 모달
Modal.confirm = (content = "title", confirmCb, cancelCb) => {
  // 모달을 열면 document에 'keydown' 이벤트 리스너 추가
  document.onkeydown = (e) => {
    if (e.key === "Escape") close();
  };

  const div = document.createElement("div");
  div.classList.add("plog-modal-confirm");
  div.id = "plog-modal";
  div.onclick = () => close(); // dim 클릭시 모달 close

  const innerDiv = document.createElement("div");
  innerDiv.classList.add("plog-modal-confirm-inner");
  div.appendChild(innerDiv);

  innerDiv.innerHTML = `
    <div class="plog-modal-confirm-title">
      <i class="fas fa-info-circle"></i>&nbsp;${content}
    </div>
    <div class="plog-modal-confirm-body">
      <button class="plog-modal-confirm-btn">확인</button>
      <button class="plog-modal-confirm-btn">취소</button>
    </div>
  `;
  innerDiv.onclick = (e) => e.stopPropagation(); // dim 클릭시 호출되는 close 메소드 전파 방지
  document.body.appendChild(div);
  const btns = document.getElementsByClassName("plog-modal-confirm-btn");
  for (let i = 0; i < btns.length; i++) {
    if (i === 0 && confirmCb)
      btns[i].onclick = () => {
        confirmCb();
        close();
      };
    if (i === 1)
      btns[i].onclick = () => {
        if (cancelCb) cancelCb();
        close();
      };
  }
};

Modal.close = close;

export default Modal;
