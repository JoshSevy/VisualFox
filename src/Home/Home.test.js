import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Home from './Home';

describe('Home Component', () => {
  it('should render Home Component correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    const title = screen.getByRole('heading', {name: /visualize your goals/i})
    const images = screen.getAllByRole('img')
    const infoSection = screen.getByRole('heading', {name: /info section/i})
    const button = screen.getByRole('link', {name: /lets get started!/i})

    expect(title).toBeInTheDocument()
    expect(images).toHaveLength(8)
    expect(infoSection).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
// might be a better integration test in app
  // it('should navagate to prompt page on click', async () => {
  //   render(
  //     <MemoryRouter>
  //       <Home />
  //     </MemoryRouter>
  //   )

  //   const button = screen.getByRole('link', {name: /lets get started!/i});

  //   fireEvent.click(button);

  //   const promptTitle = await waitFor( ()=> screen.getByRole('heading', {name: "What type of board are we building today?"}))

  // })
})