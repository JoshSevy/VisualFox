import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Prompt from './Prompt';

describe('Prompt Component', () => {
  it('should render Prompt Component correctly', () => {
    render (
      <MemoryRouter>
        <Prompt />
      </MemoryRouter>
    )

    const selectField1 = screen.getByRole('combobox', {
      name: /select a category/i});
    const selectField2 = screen.getByRole('combobox', {
      name: /subcategory/i});

    expect(selectField1).toBeInTheDocument();
    expect(selectField2).toBeInTheDocument();
  })

  it('should test select fields dynamic values', () => {
    render(
      <MemoryRouter>
        <Prompt />
      </MemoryRouter>
    );

    const selectField1 = screen.getByRole("combobox", {
      name: /select a category/i,
    });
    const selectField2 = screen.getByRole("combobox", { 
      name: /subcategory/i });

    const optionsBeforeFire = screen.getAllByRole('option');
    
    expect(optionsBeforeFire).toHaveLength(7);

    fireEvent.change(selectField1, {target: {value: 'financial'}});

    const optionsAfterFire = screen.getAllByRole('option');

    expect(optionsAfterFire).toHaveLength(11);

    fireEvent.change(selectField2, {target: {value: 'save money'}})

    const nextBtn = screen.getByRole('link', {name: /next/i});

    expect(nextBtn).toHaveAttribute('href' , "/result/save money")
  })
})