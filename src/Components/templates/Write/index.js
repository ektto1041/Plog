import React, { useRef, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Wrapper from './style';
import Button from 'Components/UI/atoms/Button';
import Input from 'Components/UI/atoms/Input';

const editorConfiguration = {
  toolbar: [
    'heading',
    '|',
    'alignment',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    'uploadImage',
    'blockQuote',
    'undo',
    'redo',
  ],
  simpleUpload: {
    // The URL that the images are uploaded to.
    uploadUrl: 'http://localhost:4000/upload/images',

    // Enable the XMLHttpRequest.withCredentials property.
    // withCredentials: true,

    // Headers sent along with the XMLHttpRequest to the upload server.
    // headers: {
    //   'X-CSRF-TOKEN': 'CSRF-Token',
    //   Authorization: 'Bearer <JSON Web Token>',
    // },
  },
};

const Write = ({ writePost }) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null); // 내용
  const onCompleteClick = () => {
    // TODO 유효성 검사

    // 글작성 api 호출
    writePost({
      title,
      content,
      menuId: 1,
    });
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Wrapper>
      <Input
        type="text"
        className="write-title-input"
        style={{ fontSize: '28px' }}
        placeholder="제목을 입력하세요"
        onChange={onTitleChange}
      />
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
      <div className="write-bottom">
        <Button>취소</Button>
        <Button onClick={onCompleteClick}>완료</Button>
      </div>
    </Wrapper>
  );
};

export default Write;
