import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import BoardsDisplay from './BoardsDisplay';

describe('BoardsDisplay Component', () => {
  it('should render BoardsDisplay Component correctly', () => {

    const boards = [{name: "Lets Do It"}, {name: "Crushing It"}]
    render(
      <MemoryRouter>
        <BoardsDisplay savedBoards={boards} />
      </MemoryRouter>
    );
    
    const title = screen.getByRole('heading', {name: /where we hide/i});
    const boardTitle = screen.getByRole('heading', {name: /lets do it/i});
    const foxLogo = screen.getAllByRole('img');

    expect(title).toBeInTheDocument();
    expect(boardTitle).toBeInTheDocument();
    expect(foxLogo).toHaveLength(2);
  })
  
  it('should render message if no boards are saved', () => {
    render(
      <MemoryRouter>
        <BoardsDisplay savedBoards={[]}/>
      </MemoryRouter>
    )
    
    const noBoardsHeading = screen.getByRole('heading', {name: /no boards yet, lets build one/i})
    const createBoardLink = screen.getByRole('link', {name: /lets go!/i})

    expect(noBoardsHeading).toBeInTheDocument();
    expect(createBoardLink).toBeInTheDocument();
  })
})