import { createSlice } from '@reduxjs/toolkit';

interface IncorrectAnswers {
  number: number | null;
  incorrectAnswers: string[];
}

const initialState: IncorrectAnswers = {
  number: 1,
  incorrectAnswers: [],
};

const incorrectAnswersSlice = createSlice({
  name: 'incorrectAnswers',
  initialState,
  reducers: {
    setAnswers(state, action) {
      if (
        state.number === action.payload.number &&
        state.incorrectAnswers.length === 0
      ) {
        state.incorrectAnswers = [...action.payload.incorrectAnswers];
      } else if (state.number === action.payload.number) {
        return;
      } else {
        state.number = action.payload.number;
        state.incorrectAnswers = [...action.payload.incorrectAnswers];
      }
    },
  },
});

export const { setAnswers } = incorrectAnswersSlice.actions;

export default incorrectAnswersSlice.reducer;
