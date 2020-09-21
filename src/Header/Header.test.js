import React from 'react'
import { screen, render } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

import Header from './Header'


describe('Header Component', () => {
  it('should render header correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
   
    const title = screen.getByRole('heading', {name: /visualfox/i});
    const homeBtn = screen.getByRole('link', {name: /home/i});
    const boardBtn = screen.getByRole('link', {name: /boards/i});

    expect(title).toBeInTheDocument();
    expect(homeBtn).toBeInTheDocument();
    expect(boardBtn).toBeInTheDocument();
  })
})