import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Hashtag from '.';

afterEach(() => {
  cleanup();
});

describe('Hashtag 컴포넌트 테스트', () => {
  it('Hashtag 컴포넌트가 화면에 표시된다.', () => {
    const utils = render(<Hashtag>해시태그</Hashtag>);
    const hashtag = utils.getByText('해시태그');
    expect(hashtag).toBeInTheDocument();
  });
});