export type Items = Item[];

export interface Item {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
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
