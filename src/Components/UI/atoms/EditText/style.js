import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

const Css = css`
  font-size: 1.5em;
  ${{...prop("style", {})}}
`;

const EditTextStyle = styled.input`
  ${Css}
`;

export { EditTextStyle };