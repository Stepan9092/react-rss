import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { withRouter } from '../../utils/withRouter';
import Header from './Header';

const HeaderWithRouter = withRouter(Header);

describe('Header', () => {
  it('header has links', () => {
    render(
      <BrowserRouter>
        <HeaderWithRouter />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
