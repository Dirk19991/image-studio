import { createSlice } from '@reduxjs/toolkit';

const answerSlice = createSlice({
  name: 'answer',
  initialState: {
    answered: false,
    highlighted: false,
    clicked: {
      0: false,
      1: false,
      2: false,
      3: false,
    },
  },
  reducers: {
    setAnswered(state, action) {
      state.answered = action.payload;
    },
    setHighlighted(state, action) {
      state.highlighted = action.payload;
    },
    setClicked(state, action) {
      const index = action.payload.index;
      state.clicked[index] = action.payload.clicked;
    },
  },
});

export const { setAnswered, setHighlighted, setClicked } = answerSlice.actions;

export default answerSlice.reducer;
