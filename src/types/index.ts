export interface IResponce {
  photos: IPhotos;
  stat: string;
}

export interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IPhoto[];
}

export interface IPhoto {
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
