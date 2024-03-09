import React from 'react';

import { act, render, screen } from '../../../../test-utils';
import { Home } from '../';

describe('Home page', () => {
  test('will be rendered successfully', async () => {
    render(<Home />, ['/']);

    await act(() => {
      const wrapper = screen.getByTestId('home-page-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });
});
