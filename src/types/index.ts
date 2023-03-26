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

export type TFormData = {
  name: React.RefObject<HTMLInputElement>;
  male: React.RefObject<HTMLInputElement>;
  female: React.RefObject<HTMLInputElement>;
  birthday: React.RefObject<HTMLInputElement>;
  country: React.RefObject<HTMLSelectElement>;
  confirmation: React.RefObject<HTMLInputElement>;
  photo: React.RefObject<HTMLInputElement>;
};

export type TFormValid = {
  name: boolean;
  gender: boolean;
  birthday: boolean;
  country: boolean;
  confirmation: boolean;
  photo: boolean;
};

export type TCard = {
  name: string;
  gender: string;
  birthday: string;
  country: string;
  confirmation: boolean;
  photo: string;
};
