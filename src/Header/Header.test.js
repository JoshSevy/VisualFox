import React from 'react'
import { screen, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom';

import Header from './Header'
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('should render header correctly', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
   
    const title = screen.getByRole('heading', {name: /visualize your goals/i})
    expect(title).toBeInTheDocument()
    
  })
})