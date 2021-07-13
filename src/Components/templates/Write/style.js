import styled from 'styled-components';

const Wrapper = styled.div`
  width: 70%;
  margin-top: 20px;

  // 제목 input
  .write-title-input {
    margin-bottom: 20px;
  }
  input::placeholder {
    font-size: 28px;
    font-weight: 500;
  }
  .write-bottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .write-bottom button {
    background: none;
    padding: 10px 20px;
    border: 1px solid #000;
    margin: 0 5px;
  }
  .write-bottom button:hover {
    background: #000;
    color: #fff;
  }
`;

export default Wrapper;
