import { IResponce } from './../../types/index';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const methodSearch = 'flickr.photos.search';
const apiKey = '60b8535a62a5d31a047a565f11963a78';

type params = {
  search: string;
  page: string;
};

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.flickr.com/services/rest/' }),
  endpoints: (build) => ({
    getProducts: build.query<IResponce, params>({
      query: ({ search = '', page = 1 }) =>
        `?method=${methodSearch}&api_key=${apiKey}&text=${search}&per_page=24&page=${page}&format=json&nojsoncallback=1&`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
