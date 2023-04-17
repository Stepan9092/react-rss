import { createSlice } from '@reduxjs/toolkit';
import { ICard } from 'types';

const initialState = {
  cards: [] as ICard[],
};

const formCardsSlice = createSlice({
  name: 'formCards',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export const { setCards } = formCardsSlice.actions;
export default formCardsSlice.reducer;
