import React from 'react';
import { useLocation } from 'react-router-dom';

export interface HeaderProps {
  location: ReturnType<typeof useLocation>;
}

export const withRouter = (Component: React.ComponentType<HeaderProps>) => {
  return (props: Omit<HeaderProps, keyof HeaderProps>) => {
    const location = useLocation();
    return <Component {...(props as HeaderProps)} location={location} />;
  };
};
