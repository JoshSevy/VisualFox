import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

import ImageCard from './ImageCard';


describe('ImageCard Component', () => {
  it('should render ImageCard correctly', () => {
    const image = {
      id: "test",
      description: "Great photo",
      urls: {regular: "http://test.org"},
    };

    const mockResults = [{image}, {image}];

    render(
      <MemoryRouter>
        <ImageCard
          image={image}
          id={image.id}
          key={image.id}
          resultSelections={mockResults}
          getResultSelections={jest.fn()}
        />
      </MemoryRouter>
    );

    const imagePopulates = screen.getByRole('img');

    expect(imagePopulates).toBeInTheDocument();

  })
})
