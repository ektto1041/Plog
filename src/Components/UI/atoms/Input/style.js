import styled, { css } from "styled-components";
import { prop } from "styled-tools";

const Wrapper = styled.div`
  position: relative;

  // 유효성 검사 메시지 표시
  .input-not-valid {
    color: crimson;
    font-size: 12px;
    margin-top: 6px;
  }
`;

const Css = css`
  display: block;
  font-weight: bold;
  outline: none;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 100%;
  margin: 5px 0;

  &::placeholder {
    font-size: 10px;
  }

  ${{ ...prop("style", {}) }}
`;

// 일반 버튼
const InputStyle = styled.input`
  ${Css}
`;

export { Wrapper, InputStyle };
