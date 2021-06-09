import styled, { css } from 'styled-components';
import { prop, switchProp, ifProp } from "styled-tools";

const Css = css`
	// common
	background: ${props => props.background ? props.background : 'none'};
	display: block;

	// size [large | medium]
	${switchProp("size", {
		large: css`
			font-size: 32px;
		`,
		medium: css`
			font-size: 20px;
		`,
	}, css`
		font-size: 15px;
	`)}

	// bold
	font-weight: ${ifProp('bold', 'bold', null)};

	${{...prop("style", {})}}
`;

const TextStyle = styled.span`
	${Css}
`;

export {
  TextStyle,
};
