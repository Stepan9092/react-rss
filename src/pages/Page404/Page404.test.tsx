import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Page404 from './Page404';

describe('page 404', () => {
  it('page 404 heading', () => {
    render(<Page404 />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
