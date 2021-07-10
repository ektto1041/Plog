import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  width: 120px;
  height: 20px;
  border: 1px solid black;
  overflow: hidden;

  ${{ ...prop('style', {}) }}
`;

const SelectStyle = styled.div`
  ${Css}
`;

export { SelectStyle };
