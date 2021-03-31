import React, { useState } from 'react';
import styled from 'styled-components';
import EditText from '../../Components/UI/atoms/EditText';
import dim from '../../Resources/Dimensions';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

const Wrapper = styled.div`
  width: 100%;
  padding: ${dim.boardPadding}px;
`;

const Presentation = () => {
  const [content, setContent] = useState("");
  const [imgList, setImgList] = useState([]);

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    console.log(files, info)
  };

  const handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
    setImgList([...imgList, imageInfo.src]);
  }

  const imageUploadHandler = (xmlHttpRequest, info, core) => {
    console.log(xmlHttpRequest, info, core)
  };

  const handleChange = (content) => {
    setContent(content);
  }

  const onClick = () => {
    console.log(imgList);

    let newContent = content;

    imgList.forEach(item => {
      newContent = newContent.replace(item, "IMAGE SOURCE");
    });

    console.log(newContent);
  }

  return (
    <Wrapper>
      <button onClick={onClick}>dd</button>
      <EditText style={{ width: dim.displayWidth - (dim.boardPadding * 2) + "px" }} />
      <SunEditor
        lang="ko"
        width={dim.displayWidth - (dim.boardPadding * 2)}
        setOptions={{ buttonList: buttonList.complex }}
        // imageUploadHandler={imageUploadHandler}
        // onImageUploadBefore={handleImageUploadBefore}
        onImageUpload={handleImageUpload}
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default Presentation;