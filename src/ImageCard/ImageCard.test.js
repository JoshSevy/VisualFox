import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

import ImageCard from './ImageCard';


describe('ImageCard Component', () => {
  it('should render ImageCard correctly', () => {
    const image = {
      url: "http://test.org",
      description: "Great photo",
    };

    render(
      <MemoryRouter>
        <ImageCard 
          image={image.url}
          description={image.description}
        />
      </MemoryRouter>
    )

  })
})
