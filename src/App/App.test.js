import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from './App';

describe('App Component', () => {
  it('should render App correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const title = screen.getByRole('heading', {name: /visualize your goals/i})
    expect(title).toBeInTheDocument()
    screen.debug()
  })

})
