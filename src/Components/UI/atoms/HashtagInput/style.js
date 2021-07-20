import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
${{ ...prop('style', {}) }}
`;

const HashtagInputStyle = styled.div`
${Css}
display: inline-block;
position: relative;

&:before {
  content: '#';
  color: #aaa;
  margin-right: 5px;
  position: absolute;
  left: 5px;
  font-size: ${prop('fontSize', '20px')};
}

input {
  border: none;
  font-size: ${prop('fontSize', '20px')};
  outline: none;
  color: #333;
  margin: 0;
  padding: 0;
  padding-left: calc(${prop('fontSize', '25px')});
}

input::placeholder {
  font-size: ${prop('fontSize', '20px')};
  // margin: 0;
}
`;

export default HashtagInputStyle;