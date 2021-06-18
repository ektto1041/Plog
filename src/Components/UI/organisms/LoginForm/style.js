import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;

  .loginform-header {
    height: 50px;
    border-bottom: 1px solid #eaeaea;
    text-align: right;
    padding: 15px;
    box-sizing: border-box;
  }

  .loginform-body {
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

    // 로그인 버튼
    .login-btn {
      background: none;
      padding: 10px 20px;
      border: 1px solid #000;
      margin: 20px 0;
    }
    .login-btn:hover {
      background: #000;
      color: #fff;
    }

    // sns 로그인 버튼
    .login-sns-btn {
      background: none;
      padding: 0;
      display: inline-block;
    }

    hr {
      width: 80%;
      border-color: #eaeaea;
      margin: 0;
      margin-bottom: 20px;
    }

    .sns-login-btns {
      display: flex;
      justify-content: space-between;

      button {
        margin: 0 5px;
      }
    }

    // 인풋
    .loginform-input {
    }
  }
`;

export default Wrapper;
