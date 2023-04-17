import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('header has heading', () => {
    render(
      <BrowserRouter>
        <Header pathname={'/'} />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
