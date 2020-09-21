import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { testMockedFetchData } from '../helpers/boardsData'
import ImageList from './ImageList';

describe('ImageList Component', () => {
  it('should render ImageList component correctly', () => {
    render(
      <MemoryRouter>
        <ImageList 
          images={testMockedFetchData}
        />
      </MemoryRouter>
    )

    const allImages = screen.getAllByRole('img');

    expect(allImages).toHaveLength(3);
  })
})