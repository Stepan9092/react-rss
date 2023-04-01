import { useLocation } from 'react-router-dom';

export interface HeaderProps {
  location: ReturnType<typeof useLocation>;
}
