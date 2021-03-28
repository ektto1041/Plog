import styled, { css } from 'styled-components';

const Css = css`
  background: ${props => props.bgColor};
`;

const ButtonStyle = styled.button`
  ${Css}
`;

export {
  ButtonStyle
};
