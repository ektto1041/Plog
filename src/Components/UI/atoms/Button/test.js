import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '.';

afterEach(() => {
  cleanup();
}); // Default on import: runs it after each test.

describe('<Button>', () => {
  // it('matches snapshot', () => {
  //   const utils = render(<Button>버튼</Button>);
  //   expect(utils.container).toMatchSnapshot();
  // });

  it('shows the props correctly', () => {
    const utils = render(<Button>버튼</Button>);
    utils.getByText('버튼');
  });
});
