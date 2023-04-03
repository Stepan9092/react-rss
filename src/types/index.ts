export type Items = Item[];

export interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ICard {
  name: string;
  gender: string;
  birthday: string;
  country: string;
  confirmation: boolean;
  photo: string;
}

export interface IData {
  name: string;
  gender: string;
  birthday: string;
  country: string;
  confirmation: boolean;
  photo: FileList;
}
