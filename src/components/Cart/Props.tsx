import { Item } from '../../types/index';

export type Props = {
  item: Item;
  setCurItemId: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
