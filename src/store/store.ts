import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productApi } from './product/product';
import searchSlice from './search/searchSlice';
import formCardsSlice from './formCards/formCardsSlice';

const rootReducer = combineReducers({
  search: searchSlice,
  formCards: formCardsSlice,
  [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
