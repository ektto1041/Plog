import React, { useRef, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import Wrapper from './style';
import Button from 'Components/UI/atoms/Button';

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

const Write = () => {
  console.log(Editor.builtinPlugins);
  return (
    <Wrapper>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <Button>완료</Button>
    </Wrapper>
  );
};

export default Write;
