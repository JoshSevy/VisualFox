import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home Component', () => {
  it('should render Home Component correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const title = screen.getByRole('heading', {name: /visualize your goals/i});
    const images = screen.getAllByRole('img');
    const infoSection = screen.getByRole('heading', {name: /but why?/i});
    const button = screen.getByRole('link', {name: /lets get started!/i});

    expect(title).toBeInTheDocument();
    expect(images).toHaveLength(8);
    expect(infoSection).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  })
})