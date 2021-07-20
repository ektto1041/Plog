import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import Write from '.';
import * as apis from 'Components/pages/Frame/api';
const spyGetMenus = jest.spyOn(apis, 'getMenus');

beforeEach(() => {
  spyGetMenus.mockResolvedValue(
    [{
      id: 1,
      name: 'menu1',
      sort: 1,
      type: 'Board',
    },
    {
      id: 2,
      name: 'menu2',
      sort: 2,
      type: 'Board',
    },
    {
      id: 3,
      name: 'menu3',
      sort: 3,
      type: 'Board',
    }]);
})
afterEach(() => {
  cleanup();
});

describe('<Write> 컴포넌트', () => {
  it('작성할 글의 카테고리(메뉴)를 선택할 수 있는 select 컴포넌트가 화면에 표시된다.', async () => {
    const utils = render(<Write />);
    const { container } = utils;
    expect(spyGetMenus).toBeCalledTimes(1);

    await waitFor(() => {
      // select 태그 체크
      const selectTags = container.getElementsByTagName('select');
      const categorySelect = selectTags[0];
      expect(categorySelect).toBeInTheDocument();

      // option 태그 체크
      const optionTags = container.getElementsByTagName('option');
      expect(optionTags.length).toBeGreaterThanOrEqual(3);
    })
  });

  it('카테고리(메뉴) select의 option 중 첫번째 option의 텍스트는 "카테고리 선택" 이다.', async () => {
    const utils = render(<Write />);
    await waitFor(() => {
      const { container } = utils;
      const optionTags = container.getElementsByTagName('option');
      const firstOptionTag = optionTags[0];
      const text = firstOptionTag.getAttribute('value');
      expect(text).toBe('카테고리 선택');
    });
  })

  it('제목을 입력하는 Input 컴포넌트가 화면에 표시 되고 포커싱이 간다.', async () => {
    const utils = render(<Write />);

    await waitFor(() => {
      // 제목 input 확인 (placeholder = '제목을 입력하세요')
      const titleInput = utils.getByPlaceholderText('제목을 입력하세요');
      expect(titleInput).toHaveClass('write-title-input');
      expect(titleInput).toHaveFocus();
    })
  });

  it('글의 해시태그를 작성하는 폼이 화면에 표시된다.', async () => {
    const utils = render(<Write />);
    await waitFor(() => {
      const hashtagInput = utils.getByPlaceholderText('태그입력');
      expect(hashtagInput).toBeInTheDocument();
    });
  });

  it('HashtagInput 컴포넌트에서 값을 입력하고 엔터를 치면, 입력값이 초기화 되고 Hashtag 컴포넌트가 화면에 추가된다.', async () => {});
  it('HashtagInput 컴포넌트에서 값을 입력하지 않고 엔터를 치면, 값을 입력하라는 모달이 표시된다.', async () => {});

  it('취소, 완료 버튼을 가지는 div.write-bottom이 화면에 표시된다.', async () => {
    const { container } = render(<Write />);
    await waitFor(() => {
      const writeBottomDiv = container.querySelector('.write-bottom');
      expect(writeBottomDiv).toBeInTheDocument();
    });
  });

  it('완료 버튼을 클릭하면 onCompleteClick 함수가 호출된다.', async () => {
    const writePost = jest.fn();
    const utils = render(<Write writePost={writePost} />);
    await waitFor(() => {
      // '완료' 버튼이 화면에 표시된다.
      const completeBtn = utils.getByText('완료');
      expect(completeBtn).toBeInTheDocument();
  
      // '완료' 버튼을 클릭하면 props로 전달되서 들어온 writePost 함수가 호출된다.
      fireEvent.click(completeBtn);
      expect(writePost).toBeCalled();
    });
  });

  it('취소 버튼을 클릭하면 확인 모달이 화면에 표시된다.', async () => {
    const { baseElement, getByText } = render(<Write />);
    await waitFor(() => {
      // '취소' 버튼이 화면에 표시된다.
      const cancelBtn = getByText('취소');
      expect(cancelBtn).toBeInTheDocument();
  
      // '취소' 버튼을 클릭하면 화면에 확인 모달이 표시된다.
      fireEvent.click(cancelBtn);
      const plogModal = baseElement.querySelector('.plog-modal-confirm-title');
      expect(plogModal).toBeInTheDocument();
    })
  });
});
