import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;

  .board-top-left {
  }
  .board-top-right {
    input {
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      transition: 0.6s;
      font-size: 18px;
    }
  }
  // 돋보기 버튼
  .board-top-search {
    cursor: pointer;
    margin-left: 5px;
    font-size: 18px;
  }
  .board-top-search:hover {
    color: skyblue;
  }
  .hidden-search {
    opacity: 0;
    visibility: hidden;
  }
  .show-search {
    opacity: 1;
    visibility: visible;
  }
`;

export default Wrapper;
