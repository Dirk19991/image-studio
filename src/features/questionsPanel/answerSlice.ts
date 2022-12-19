import { createSlice } from '@reduxjs/toolkit';
import {
  continueGame,
  loseGame,
  nextQuestion,
  startGame,
  winGame,
} from '../progressPanel/progressSlice';

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
  extraReducers: (builder) => {
    builder.addCase(startGame, (state) => {
      state.highlighted = false;
      state.answered = false;
      for (let key in state.clicked) {
        state.clicked[key] = false;
      }
    });
    builder.addCase(continueGame, (state) => {
      state.highlighted = false;
      state.answered = false;
      for (let key in state.clicked) {
        state.clicked[key] = false;
      }
    });
    builder.addCase(winGame, (state) => {
      state.highlighted = true;
    });
    builder.addCase(nextQuestion, (state) => {
      state.answered = false;
      for (let key in state.clicked) {
        state.clicked[key] = false;
      }
      state.highlighted = false;
    });
    builder.addCase(loseGame, (state) => {
      state.highlighted = true;
    });
  },
});

export const { setAnswered, setHighlighted, setClicked } = answerSlice.actions;

export default answerSlice.reducer;
