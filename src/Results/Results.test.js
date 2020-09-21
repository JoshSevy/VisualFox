import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";

import { testMockedFetchData } from '../helpers/visualFoxData'

import Results from './Results';

describe('Results Component', () => {
  it('should render results page correctly', () => {
    render(
      <MemoryRouter>
        <Results 
          images={testMockedFetchData}
        />
      </MemoryRouter>
    )

    const mainHeading = screen.getByRole('heading', {name: /choose two/i});
    const continueBtn = screen.getByRole('link', {name: /continue/i});
    const images = screen.getAllByRole('img');

    expect(mainHeading).toBeInTheDocument();
    expect(continueBtn).toBeInTheDocument();
    expect(images).toHaveLength(3);
  })
})