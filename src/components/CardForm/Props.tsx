import { ICard } from 'types';

export type Props = {
  cardList: ICard[];
  setCardList: React.Dispatch<React.SetStateAction<ICard[]>>;
};
