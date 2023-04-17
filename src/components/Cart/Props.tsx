import { IPhoto } from '../../types/index';

export type Props = {
  item: IPhoto;
  setCurItemId: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};
