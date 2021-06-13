import styled, { css } from "styled-components";
import { prop, ifProp } from "styled-tools";

const Css = css`
  border: none;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  background: none;

  ${{ ...prop("style", {}) }}
`;

// 일반 버튼
const ButtonStyle = styled.button`
  ${Css}
`;

// 원형 버튼
const RoundButtonStyle = styled.button`
  ${Css}
  width: calc(${prop("radius", "auto")}px * 2);
  height: calc(${prop("radius", "auto")}px * 2);
  border-radius: ${ifProp({ shape: "round" }, prop("radius", "0"), 0)}%;
`;

export { ButtonStyle, RoundButtonStyle };
