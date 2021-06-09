import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { prop } from "styled-tools";

const Wrapper = styled.div`
position: relative;
overflow: hidden;
width: ${props => props.width ? `${props.width}px` : '100%'};
height: ${prop('height', 0)}px;

.inner-slider > div {
  position: absolute;
  width: 100%;
  cursor: pointer;
}

input[name=tab-menu] {
  display: none;
}

#slider-btn {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
#slider-btn label {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: lightgray;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 3px;
}
`;

const Slider = ({ children, width, height }) => {
  const [innerDiv, setInnerDiv] = useState(null);
  const [labelList, setLabelList] = useState([]);

  // inner-slider 노드 생성
  useEffect(() => {
    const innerDiv = React.createElement("div", {
      className: 'inner-slider',
      style: {
        position: 'absolute',
        width: width ? `${width}px` : '100%',
        height: 'auto',
        left: 0,
        transition: '0.6s',
    }, children});
    
    setInnerDiv(innerDiv);

    // label 태그 생성
    const labelList = [];
    const len = children.length;
    for (let i = 0; i < len; i ++) {
      const labelElement = (
        <label
          key={`tab${i + 1}`}  
          htmlFor={`tab${i + 1}`}
          onClick={() => {
          const innerSlider = document.querySelector('.inner-slider');
          if (width) innerSlider.style.left = `-${i * width}px`;
          else innerSlider.style.left = `-${100 * i}%`;
        }} />
      );
      labelList.push(labelElement);
    }
    setLabelList(labelList);
  }, []);

  // innerDiv가 그려진 후, innderDiv의 children div에게 left, heigth 부여
  useEffect(() => {
    if (innerDiv !== null) {
      const divList = document.querySelectorAll('.inner-slider > div');
      divList.forEach((div, i) => {
        // left
        if (width) div.style.left = `${i * width}px`;
        else div.style.left = `${100 * i}%`;
        
        // height
        if (height) div.style.height = `${height}px`;
      });
    }
  }, [innerDiv]);

  return (
    <Wrapper
      className="slider"
      height={height}
      width={width}
    >
      {innerDiv}
      <input type="radio" name="tab-menu" id="tab1" />
      <input type="radio" name="tab-menu" id="tab1" />
      <div id="slider-btn">
        {labelList}
      </div>
    </Wrapper>
  );
}

export default Slider;