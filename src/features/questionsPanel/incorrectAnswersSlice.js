import { createSlice } from '@reduxjs/toolkit';

const incorrectAnswersSlice = createSlice({
  name: 'incorrectAnswers',
  initialState: {
    number: 1,
    answers: [],
  },
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
