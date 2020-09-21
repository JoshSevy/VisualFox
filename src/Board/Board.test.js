import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { testDataBoards } from '../helpers/boardsData';

import Board from './Board';

describe('Board Component', () => {
  it('should render Board component correctly', () => {
     render(
      <MemoryRouter>
        <Board builtBoard={testDataBoards} />
      </MemoryRouter>
    );

    const saveButton = screen.getByRole("link", { name: /save board/i });
    const deleteButton = screen.getByRole("link", { name: /delete board/i });
    const title = screen.getByRole('heading', {name: /test board/i});
    const images = screen.getAllByRole('img');

    expect(saveButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(images).toHaveLength(3);
  })
})