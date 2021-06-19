import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eaeaea;
  width: 80%;

  // 글 썸네일
  .post-img {
    cursor: pointer;
  }

  // 글 제목과 요약된 내용
  .post-content {
    margin-left: 20px;
    height: 150px;
  }

  // 글 제목
  .post-content-title {
    cursor: pointer;
  }
  .post-content-title:hover {
    color: #000;
  }

  // 글 요약된 내용
  .post-content-body {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    cursor: pointer;
  }
  .post-content-body:hover {
    color: #000;
  }
`;

export default Wrapper;
