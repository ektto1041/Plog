import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
${{ ...prop('style', {}) }}
`;

const HashtagStyle = styled.span`
${Css}
position: relative;

.hashtag-content {
}
.hashtag-content::before {
  content: '#';
}
.hashtag-dim {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: none;
}

&:hover .hashtag-content {
  color: #eee;
}
&:hover .hashtag-dim {
  display: block;
  text-align: center;
  cursor: pointer;
}
`;

export default HashtagStyle;