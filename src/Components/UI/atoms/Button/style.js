import styled, { css } from 'styled-components';
import { ifProp } from "styled-tools";

const Css = css`
  outline: none;
  border: none;
`;

const ButtonStyle = styled.button`
  ${Css}
`;

export {
  ButtonStyle
};
