import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardList from './CardList';

const items = [
  {
    birthday: '2023-03-01',
    confirmation: true,
    country: 'United States',
    gender: 'male',
    name: 'Stepan',
    photo: '',
  },
];

describe('CardList', () => {
  it('CardList has heading', () => {
    render(<CardList items={items} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
