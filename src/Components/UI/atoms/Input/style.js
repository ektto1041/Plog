import styled, { css } from "styled-components";
import { prop } from "styled-tools";

const Css = css`
  display: block;
  font-weight: bold;
  outline: none;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
  width: 100%;

  ${{ ...prop("style", {}) }}
`;

// 일반 버튼
const InputStyle = styled.input`
  ${Css}
`;

export { InputStyle };
