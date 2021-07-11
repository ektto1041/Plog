import styled from 'styled-components';

const Wrapper = styled.div`
  // container
  display: flex;
  align-items: center;
  height: 100px;
  border-bottom: 1px solid #eaeaea;

  // flex-item
  width: 100%;

  // header 제목
  .header-title {
    background: none;
    flex-basis: 8%;
    font-size: 26px;
  }
`;

export default Wrapper;
