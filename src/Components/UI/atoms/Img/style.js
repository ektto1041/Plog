import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  width: ${prop('width', 'auto')};
  height: ${prop('height', 'auto')};
  ${{ ...prop('style', {}) }}
`;

const ImgStyle = styled.img`
  ${Css}
`;

export { ImgStyle };
