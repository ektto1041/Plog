import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  color: ${prop('color', '#000')};
  ${{ ...prop('style', {}) }}
`;

const PStyle = styled.p`
  ${Css}
`;

export { PStyle };
