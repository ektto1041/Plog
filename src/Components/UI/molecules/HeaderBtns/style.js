import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  // flex-item
  flex-basis: 12%;

  .header-btns {
    background: none;
    border: 1px solid lightgray;
    border-radius: 10px;
    margin: 0 5px;
    padding: 10px;

    &:hover {
      background: gold;
      color: #fff;
      border-color: #fff;
    }
  }
`;

export default Wrapper;
