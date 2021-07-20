import React, { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useHistory } from 'react-router-dom';
import Modal from 'Components/UI/organisms/Modal';
import Wrapper from './style';
import Button from 'Components/UI/atoms/Button';
import Input from 'Components/UI/atoms/Input';
import HashtagInput from 'Components/UI/atoms/HashtagInput';
import Hashtag from 'Components/UI/atoms/Hashtag';
import { getMenus } from 'Components/pages/Frame/api';

const editorConfiguration = {
  toolbar: [
    'heading',
    '|',
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
  const [selectComp, setSelectComp] = useState(null); // 메뉴 select
  const [title, setTitle] = useState(null); // 제목
  const [content, setContent] = useState(null); // 내용
  const history = useHistory();
  const titleInput = useRef(null); // 제목 input

  // 카테고리(메뉴) 불러오기
  useEffect(() => {
    const loadMenus = async () => {
      const menuList = await getMenus();
      menuList.unshift({ id: 'init', name: '카테고리 선택', sort: 0, type: 'None' });
      const optionList = menuList.map((menu) => <option key={menu.id} value={menu.name}>{menu.name}</option>);
      const selectComp = React.createElement('select', null, optionList);
      setSelectComp(selectComp);
    }
    loadMenus();

    // 제목 input에 포커스 주기
    titleInput.current.focus();
  }, []);

  // '완료' 버튼 클릭
  const onCompleteClick = () => {
    // TODO 유효성 검사

    // 글작성 api 호출
    writePost({
      title,
      content,
      menuId: 1,
    });
  };

  // '취소' 버튼 클릭
  const onCancelClick = () => {
    Modal.confirm('취소 하시겠습니까?', () => {
      history.push('/');
    });
  };

  // 제목 입력시 onChange 콜백 함수
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <Wrapper>
      {selectComp}
      <Input
        type="text"
        className="write-title-input"
        style={{ fontSize: '28px' }}
        placeholder="제목을 입력하세요"
        onChange={onTitleChange}
        ref={titleInput}
      />
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
          
          // 현재 에디터에서 사용 가능한 툴바 메뉴 목록
          // console.log(Array.from( editor.ui.componentFactory.names() ));
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
      <div className="write-hashtag">
        <HashtagInput type='text' onKeyDown={(e) => {
          if (e.keyCode === 13) {
            
          }
        }} />
        <div className="write-hashtag-list">
          <Hashtag>해시태그</Hashtag>
        </div>
      </div>
      <div className="write-bottom">
        <Button onClick={onCancelClick}>취소</Button>
        <Button onClick={onCompleteClick}>완료</Button>
      </div>
    </Wrapper>
  );
};

export default Write;
