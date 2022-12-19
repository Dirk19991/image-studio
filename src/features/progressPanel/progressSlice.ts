import { RootState } from './../../store/index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface Progress {
  progress: number | null;
  fiftyFifty: {
    active: boolean;
    used: boolean;
  };
  friendCall: {
    used: boolean;
  };
  audienceHelp: {
    used: boolean;
  };
  lostGame: boolean;
  finishedGame: boolean;
}

const initialState: Progress = {
  progress: null,
  fiftyFifty: {
    active: false,
    used: false,
  },
  friendCall: {
    used: false,
  },
  audienceHelp: {
    used: false,
  },
  lostGame: false,
  finishedGame: false,
};

const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    setProgress(state, action) {
      state.progress = action.payload;
    },
    setFiftyFifty(state, action) {
      state.fiftyFifty.active = action.payload.active;

      state.fiftyFifty.used = action.payload.used;
    },
    setFriendCall(state, action) {
      state.friendCall.used = action.payload.used;
    },
    setAudienceHelp(state, action) {
      state.audienceHelp.used = action.payload.used;
    },
    setLostGame(state, action) {
      state.lostGame = action.payload;
    },
    setFinishedGame(state, action) {
      state.finishedGame = action.payload;
    },
    startGame(state) {
      state.progress = null;
      state.lostGame = false;
      state.finishedGame = false;
      state.fiftyFifty.used = false;
      state.fiftyFifty.active = false;
      state.friendCall.used = false;
      state.audienceHelp.used = false;
    },
    continueGame(state) {
      if (state.progress === null) {
        state.progress = 1;
      } else {
        state.progress += 1;
      }
      state.lostGame = false;
      state.finishedGame = false;
      state.fiftyFifty.active = false;
    },
    winGame(state) {
      state.finishedGame = true;
    },
    loseGame(state) {
      state.lostGame = true;
      state.finishedGame = true;
    },
    nextQuestion(state) {
      if (state.progress === null) {
        state.progress = 1;
      } else {
        state.progress += 1;
      }

      if (state.fiftyFifty.active === true) {
        state.fiftyFifty.active = false;
        state.fiftyFifty.used = true;
      }
    },
  },
});

export const {
  setProgress,
  setFiftyFifty,
  setFriendCall,
  setAudienceHelp,
  setLostGame,
  setFinishedGame,
  startGame,
  continueGame,
  winGame,
  nextQuestion,
  loseGame,
} = progressSlice.actions;

export default progressSlice.reducer;
