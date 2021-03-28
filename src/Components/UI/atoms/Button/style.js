import styled, { css } from 'styled-components';
import { prop } from "styled-tools";

const Css = css`
  outline: none;
  border: none;
  color: ${props => props.theme.basic.color.main};

  ${{...prop("style", {})}}
`;

const ButtonStyle = styled.button`
  ${Css}
`;

export {
  ButtonStyle
};
