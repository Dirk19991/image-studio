import { createSlice } from '@reduxjs/toolkit';

interface Answer {
  answered: boolean;
  highlighted: boolean;
  clicked: {
    [key: number]: boolean;
    0: boolean;
    1: boolean;
    2: boolean;
    3: boolean;
  };
}

const initialState: Answer = {
  answered: false,
  highlighted: false,
  clicked: {
    0: false,
    1: false,
    2: false,
    3: false,
  },
};

const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswered(state, action) {
      state.answered = action.payload;
    },
    setHighlighted(state, action) {
      state.highlighted = action.payload;
    },
    setClicked(state, action) {
      const index: 0 | 1 | 2 | 3 = action.payload.index;
      state.clicked[index] = action.payload.clicked;
    },
  },
});

export const { setAnswered, setHighlighted, setClicked } = answerSlice.actions;

export default answerSlice.reducer;
