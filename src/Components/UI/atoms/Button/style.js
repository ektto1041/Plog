import styled, { css } from 'styled-components';
import { ifProp } from "styled-tools";

const Css = css`
  background: ${props => props.bgColor};
  outline: none;
  border: none;
`;

const ButtonStyle = styled.button`
  ${Css}
`;

export {
  ButtonStyle
};
