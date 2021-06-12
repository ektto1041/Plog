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
    .login-kakao-btn {
      background: none;
      padding: 0;
    }
    img {
      cursor: pointer;
    }
  }
`;

export default Wrapper;
