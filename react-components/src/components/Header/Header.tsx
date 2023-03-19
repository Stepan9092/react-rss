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
    if (pathname !== '/about' && pathname !== '/') {
      this.setState({ page: 'Page not found' });
    }
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.links}>
          <NavLink to="/about" onClick={() => this.setState({ page: 'About Us' })}>
            About Us
          </NavLink>
          <NavLink to="/" onClick={() => this.setState({ page: 'Main Page' })}>
            Main Page
          </NavLink>
        </div>
        <h1 className={styles.title}>{this.state.page}</h1>
      </header>
    );
  }
}
