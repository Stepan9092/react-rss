import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, it } from 'vitest';
import Footer from './Footer';

describe('footer', () => {
  it('render footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('github')).toBeInTheDocument();
    expect(screen.getByTestId('rss')).toBeInTheDocument();
  });
});
