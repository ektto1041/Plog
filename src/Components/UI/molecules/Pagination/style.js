import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  // 버튼
  .pagination-btn {
    border: 1px solid #eaeaea;
    border-radius: 50%;
    margin: 0 5px;
  }
  // 현재 버튼
  .current-btn {
    color: skyblue;
    border-color: skyblue;
  }
  .pagination-btn:hover {
    color: skyblue;
    border-color: skyblue;
  }
`;

export default Wrapper;
