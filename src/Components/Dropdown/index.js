import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

import col from '../../Resources/Colors';
import arrowDownImg from '../../Resources/Images/arrow_down.png';

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  height: 30px;
  color: white;
`;

const MainBox = styled.div`
  position: relative;
  width: 150px;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;

  background: ${col.lemonFizz};
`;

const ArrowIcon = styled.img`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 16px;
  height: 16px;
`;

const SubBox = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  display: ${p => p.isOpen ? "block" : "none"};
  width: 150px;

  box-shadow: 0 0 5px gray;

  z-index: 10;
`;

  const SubBoxItem = styled.div`
    width: 100%;
    height: 30px;

    padding-left: 10px;

    background: ${col.carnivalGlass};

    line-height: 30px;

    user-select: none;
    cursor: pointer;

    &:hover {
      background: ${col.lemonFizz};
    }
  `;

const Dropdown = ({
  dataset,
  text,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Wrapper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <MainBox>{text}<ArrowIcon src={arrowDownImg} alt="" /> </MainBox>
      <SubBox isOpen={isOpen}>
        {dataset.map((item, idx) => (
          <SubBoxItem key={idx} onClick={() => dataset[idx].handleClick(idx+1)}>{item.text}</SubBoxItem>
        ))}
      </SubBox>
    </Wrapper>
  );
};

export default Dropdown;