import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ErrorPage from './ErrorPage';

describe('ErrorPage Component', () => {
  it('should render ErrorPage Component correctly', () => {
    render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>
    )

    const mainHeading = screen.getByRole('heading', {name: /oh no/i});
    const secondaryMessage = screen.getByRole('heading', {name: /looks like something/i});

    expect(mainHeading).toBeInTheDocument();
    expect(secondaryMessage).toBeInTheDocument();
  })
})