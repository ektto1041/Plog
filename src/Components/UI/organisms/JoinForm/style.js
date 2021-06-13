import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;

  .joinform-header {
    height: 50px;
    border-bottom: 1px solid #eaeaea;
    text-align: right;
    padding: 15px;
    box-sizing: border-box;
  }

  .joinform-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    .title {
      margin-bottom: 30px;
      font-size: 28px;
      font-weight: bold;
    }

    hr {
      width: 80%;
      border-color: #eaeaea;
      margin: 20px 0;
    }

    // 인풋
    .joinform-input {
      width: 50%;
    }

    .join-btns {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    // 로그인 버튼
    .join-btn {
      background: none;
      padding: 10px 20px;
      border: 1px solid #000;
      margin: 0 5px;
    }
    .join-btn:hover {
      background: #000;
      color: #fff;
    }
  }
`;

export default Wrapper;
