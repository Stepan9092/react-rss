import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Form from './Form';

describe('Form', () => {
  it('Form has checkbox', () => {
    render(<Form />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
  });
  it('Form has fields', () => {
    render(<Form />);
    expect(screen.getByText('Birthday:')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
  });
});
