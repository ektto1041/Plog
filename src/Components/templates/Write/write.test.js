import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Write from '.';

afterEach(() => {
  cleanup();
});

describe('<Write> 컴포넌트', () => {
  it('제목을 입력하는 Input 컴포넌트가 화면에 표시된다.', () => {
    const utils = render(<Write />);

    // 제목 input 확인 (placeholder = '제목을 입력하세요')
    const titleInput = utils.getByPlaceholderText('제목을 입력하세요');
    expect(titleInput).toHaveClass('write-title-input');
  });

  it('취소, 완료 버튼을 가지는 div.write-bottom이 화면에 표시된다.', () => {
    const { container } = render(<Write />);
    const writeBottomDiv = container.querySelector('.write-bottom');
    expect(writeBottomDiv).toBeInTheDocument();
  });

  it('완료 버튼을 클릭하면 onCompleteClick 함수가 호출된다.', () => {
    const writePost = jest.fn();
    const utils = render(<Write writePost={writePost} />);

    // '완료' 버튼이 화면에 표시된다.
    const completeBtn = utils.getByText('완료');
    expect(completeBtn).toBeInTheDocument();

    // '완료' 버튼을 클릭하면 props로 전달되서 들어온 writePost 함수가 호출된다.
    fireEvent.click(completeBtn);
    expect(writePost).toBeCalled();
  });

  it('취소 버튼을 클릭하면 확인 모달이 화면에 표시된다.', () => {
    const { baseElement, getByText } = render(<Write />);

    // '취소' 버튼이 화면에 표시된다.
    const cancelBtn = getByText('취소');
    expect(cancelBtn).toBeInTheDocument();

    // '취소' 버튼을 클릭하면 화면에 확인 모달이 표시된다.
    fireEvent.click(cancelBtn);
    const plogModal = baseElement.querySelector('.plog-modal-confirm-title');
    expect(plogModal).toBeInTheDocument();
  });
});
