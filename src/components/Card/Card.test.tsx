import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Card from './Card';

const item = {
  birthday: '2023-03-01',
  confirmation: true,
  country: 'United States',
  gender: 'male',
  name: 'Stepan',
  photo: '',
};
describe('Card', () => {
  it('CardList has photo', () => {
    render(<Card item={item} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
