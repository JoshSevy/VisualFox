import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import * as axios from 'axios';

jest.mock('../helpers/unsplash');
jest.mock('axios');
import { unsplashResponse } from '../helpers/unsplash';

import { testMockedFetchData } from '../helpers/boardsData';
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

  it('should check prompt changes and results async functions', async () => {
    unsplashResponse.mockResolvedValueOnce({
      data: { results: testMockedFetchData },
    });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    const getStartedLink = screen.getByRole("link", {
      name: /lets get started!/i,
    });

    fireEvent.click(getStartedLink);

    const textInput = screen.getByPlaceholderText(/lets name this board/i);
    const categorySelect = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const subCategorySelect = screen.getByRole("combobox", {
      name: /subcategory/i,
    });
    
    fireEvent.change(textInput, {target : {value: "Test Board"}})
    fireEvent.change(categorySelect, {target: {value: "fitness"}})
    fireEvent.change(subCategorySelect, {target: {value: "lose weight"}})

    const nextBtn = screen.getByRole('link', {name: /next/i})
    
    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);

    const resultsTitle = await waitFor(() => screen.getByRole('heading', {name: /choose two/i}))
    const continueBtn = await waitFor(() => screen.getByRole('link', {name: /continue/i}))

    expect(resultsTitle).toBeInTheDocument();
    expect(continueBtn).toBeInTheDocument();

    fireEvent.click(continueBtn);

    const prompt2Title = screen.getByRole('heading', {name: /great work lets/i})

    expect(prompt2Title).toBeInTheDocument();
  })

  it('should go route to error page if fetch request fails', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const getStartedLink = screen.getByRole("link", {
      name: /lets get started!/i,
    });

    fireEvent.click(getStartedLink);

    const textInput = screen.getByPlaceholderText(/lets name this board/i);
    const categorySelect = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const subCategorySelect = screen.getByRole("combobox", {
      name: /subcategory/i,
    });

    fireEvent.change(textInput, { target: { value: "Test Board" } });
    fireEvent.change(categorySelect, { target: { value: "fitness" } });
    fireEvent.change(subCategorySelect, { target: { value: "lose weight" } });

    const nextBtn = screen.getByRole("link", { name: /next/i });

    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);

    const errorHeading = screen.getByRole('heading', {name: /sorry!/i});
    expect(errorHeading).toBeInTheDocument();
  })

  it('should run through whole app process and return home', async() => {
    unsplashResponse.mockResolvedValue({
      data: { results: testMockedFetchData },
    });

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const getStartedLink = screen.getByRole("link", {
      name: /lets get started!/i,
    });

    fireEvent.click(getStartedLink);

    const textInput = screen.getByPlaceholderText(/lets name this board/i);
    const categorySelect = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const subCategorySelect = screen.getByRole("combobox", {
      name: /subcategory/i,
    });

    fireEvent.change(textInput, { target: { value: "Test Board" } });
    fireEvent.change(categorySelect, { target: { value: "fitness" } });
    fireEvent.change(subCategorySelect, { target: { value: "lose weight" } });

    const nextBtn = screen.getByRole("link", { name: /next/i });

    expect(nextBtn).toBeInTheDocument();

    fireEvent.click(nextBtn);
    
    const continueBtn = await waitFor(() =>
      screen.getByRole("link", { name: /continue/i })
    );

    fireEvent.click(continueBtn);

    const prompt2Title = screen.getByRole("heading", {
      name: /great work lets/i,
    });

    expect(prompt2Title).toBeInTheDocument();

    const categorySelect2 = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const subCategorySelect2 = screen.getByRole("combobox", {
      name: /subcategory/i,
    });

    fireEvent.change(categorySelect2, { target: { value: "fitness" } });
    fireEvent.change(subCategorySelect2, { target: { value: "lose weight" } });

    const nextBtn2 = screen.getByRole("link", { name: /next/i });

    expect(nextBtn2).toBeInTheDocument();

    fireEvent.click(nextBtn2);

    const continueBtn2 = await waitFor(() =>
      screen.getByRole("link", { name: /continue/i })
    );

    expect(continueBtn2).toBeInTheDocument();

    fireEvent.click(continueBtn2);

    const prompt3Title = screen.getByRole("heading", {
      name: /almost there keep it up/i,
    });

    expect(prompt3Title).toBeInTheDocument();

    const categorySelect3 = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const subCategorySelect3 = screen.getByRole("combobox", {
      name: /subcategory/i,
    });

    fireEvent.change(categorySelect3, { target: { value: "fitness" } });
    fireEvent.change(subCategorySelect3, { target: { value: "lose weight" } });

    const nextBtn3 = screen.getByRole("link", { name: /next/i });

    expect(nextBtn3).toBeInTheDocument();

    fireEvent.click(nextBtn3);

    const continueBtn3 = await waitFor(() =>
      screen.getByRole("link", { name: /continue/i })
    );

    expect(continueBtn3).toBeInTheDocument();

    fireEvent.click(continueBtn3);

    const prompt4Title = screen.getByRole("heading", {
      name: /last prompt home stretch/i,
    });

    expect(prompt4Title).toBeInTheDocument();

    const categorySelect4 = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const subCategorySelect4 = screen.getByRole("combobox", {
      name: /subcategory/i,
    });

    fireEvent.change(categorySelect4, { target: { value: "fitness" } });
    fireEvent.change(subCategorySelect4, { target: { value: "lose weight" } });

    const nextBtn4 = screen.getByRole("link", { name: /next/i });

    expect(nextBtn4).toBeInTheDocument();

    fireEvent.click(nextBtn4);

    const continueBtn4 = await waitFor(() =>
      screen.getByRole("link", { name: /continue/i })
    );

    expect(continueBtn4).toBeInTheDocument();

    fireEvent.click(continueBtn4);

    const finalHeading = screen.getByRole('heading', {name: /congrats! you finished/i});
    const buildBoardLink = screen.getByRole('link', {name: /build your board/i});

    expect(finalHeading).toBeInTheDocument();
    expect(buildBoardLink).toBeInTheDocument();

    fireEvent.click(buildBoardLink);

    const boardName = screen.getByRole('heading', {name: /test board/i});
    const saveLink = screen.getByRole('link', {name: /save board/i});
    const deleteLink = screen.getByRole('link', {name: /delete board/i});

    expect(boardName).toBeInTheDocument();
    expect(saveLink).toBeInTheDocument();
    expect(deleteLink).toBeInTheDocument();

    fireEvent.click(deleteLink);

    const backHomeHeader = screen.getByRole('heading', {name: /visualize your goals/i})

    expect(backHomeHeader).toBeInTheDocument();
  })
})
