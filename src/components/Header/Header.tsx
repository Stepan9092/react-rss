import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderProps } from 'utils/withRouter';

export default class Header extends Component<HeaderProps> {
  state = {
    page: 'Main Page',
  };

  componentDidMount() {
    const { pathname } = this.props.location;
    if (pathname !== '/about' && pathname !== '/' && pathname !== '/form') {
      this.setState({ page: 'Page not found' });
    }
    if (pathname === '/about') this.setState({ page: 'About Us' });
    if (pathname === '/form') this.setState({ page: 'Form' });
    if (pathname === '/') this.setState({ page: 'Main Page' });
  }

  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.links}>
          <NavLink to="/about" onClick={() => this.setState({ page: 'About Us' })}>
            About Us
          </NavLink>
          <NavLink to="/" onClick={() => this.setState({ page: 'Main Page' })}>
            Main Page
          </NavLink>
          <NavLink to="/form" onClick={() => this.setState({ page: 'Form' })}>
            Form
          </NavLink>
        </nav>
        <h1 className={styles.title}>{this.state.page}</h1>
      </header>
    );
  }
}
