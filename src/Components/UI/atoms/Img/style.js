import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  ${{ ...prop('style', {}) }}
`;

const ImgStyle = styled.img`
  ${Css}
`;

export { ImgStyle };
