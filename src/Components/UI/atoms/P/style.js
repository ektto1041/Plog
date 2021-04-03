import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  ${{ ...prop('style', {}) }}
`;

const PStyle = styled.p`
  ${Css}
`;

export { PStyle };
