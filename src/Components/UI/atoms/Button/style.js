import styled, { css } from 'styled-components';
import { prop, ifProp } from "styled-tools";

import col from '../../../../Resources/Colors';

const Css = css`
  width: calc(${prop("radius", "auto")} * 2);
  height: calc(${prop("radius", "auto")} * 2);
  background: ${prop("bgColor", col.siesta)};
  border: 0;
  border-radius: ${ifProp({ shape: "round" }, prop("radius", "0"), 0)};

  outline: none;

  ${{...prop("style", {})}}
`;

const ButtonStyle = styled.button`
  ${Css}
`;

export {
  ButtonStyle
};
