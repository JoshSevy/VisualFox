import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import App from './App';

describe('App Component', () => {
  it('should render App/Home Components correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const title = screen.getByRole('heading', {name: /visualize your goals/i});
    const landingPageImages = screen.getAllByRole('img');
    const subHeading = screen.getByRole('heading', {name: /but why?/i});
    const getStartedLink = screen.getByRole('link', {name: /lets get started!/i})

    expect(title).toBeInTheDocument();
    expect(landingPageImages).toHaveLength(9);
    expect(subHeading).toBeInTheDocument();
    expect(getStartedLink).toBeInTheDocument();
  })
  
  it('should render App/Heading Component correctly', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const logo = screen.getByRole('img', {name: /visual fox logo orange fox head/i});
    const navTitle = screen.getByRole('heading', {name: /visualfox/i});
    const homeBtn = screen.getByRole('link', {name: /home/i});
    const boardsBtn = screen.getByRole('link', {name: /boards/i});

    expect(logo).toBeInTheDocument();
    expect(navTitle).toBeInTheDocument();
    expect(homeBtn).toBeInTheDocument();
    expect(boardsBtn).toBeInTheDocument();
  })

  it('should navigate to prompts page on button click', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const getStartedLink = screen.getByRole("link", {
      name: /lets get started!/i,
    });

    fireEvent.click(getStartedLink);

    const promptTitle = screen.getByRole('heading', {name: /what type of board are we building today?/i});
    const textInput = screen.getByPlaceholderText(/lets name this board/i);
    const categorySelect = screen.getByRole("combobox", { name: /select a category/i });
    const subCategorySelect = screen.getByRole("combobox", { name: /subcategory/i });
    const categoryOptions = screen.getAllByRole('option');

    expect(promptTitle).toBeInTheDocument();
    expect(textInput).toBeInTheDocument();
    expect(categorySelect).toBeInTheDocument();
    expect(subCategorySelect).toBeInTheDocument();
    expect(categoryOptions).toHaveLength(7);
  })

  it('should check input fields in prompt 1 and render results on next', () => {
    
  })
})
