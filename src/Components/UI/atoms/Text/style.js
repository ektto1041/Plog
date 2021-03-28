import styled, { css } from 'styled-components';

const Css = css`
    background: ${props => props.background};
`;

const TextStyle = styled.span`
${Css}
`;

export {
    TextStyle,
};
