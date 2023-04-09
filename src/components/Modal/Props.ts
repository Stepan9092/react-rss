import { ReactNode } from 'react';

export type Props = {
  children?: ReactNode;
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
