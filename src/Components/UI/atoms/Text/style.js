import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  font-size: ${prop('fontSize', (props) => props.theme.basic.fontSize)};
`;

const TextStyle = styled.span`
  ${Css}
`;

export { TextStyle };
