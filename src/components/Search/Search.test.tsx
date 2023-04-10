import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import Search from './Search';

describe('Search', () => {
  it('page has search', () => {
    render(
      <Search
        searchValue={''}
        setSearchValue={function (): void {
          throw new Error('Function not implemented.');
        }}
        getData={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('search')).toBeInTheDocument();
  });
});
