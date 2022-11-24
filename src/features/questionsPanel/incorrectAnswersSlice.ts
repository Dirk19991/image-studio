import { createSlice } from '@reduxjs/toolkit';

interface IncorrectAnswers {
  number: number;
  answers: string[];
}

const initialState: IncorrectAnswers = {
  number: 1,
  answers: [],
};

const incorrectAnswersSlice = createSlice({
  name: 'incorrectAnswers',
  initialState,
  reducers: {
    setAnswers(state, action) {
      if (
        state.number === action.payload.number &&
        state.answers.length === 0
      ) {
        state.answers = [...action.payload.answers];
      } else if (state.number === action.payload.number) {
        return;
      } else {
        state.number = action.payload.number;
        state.answers = [...action.payload.answers];
      }
    },
  },
});

export const { setAnswers } = incorrectAnswersSlice.actions;

export default incorrectAnswersSlice.reducer;
