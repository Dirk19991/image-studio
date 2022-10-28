import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    progress: 15,
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
  },
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
  },
});

export const {
  setProgress,
  setFiftyFifty,
  setFriendCall,
  setAudienceHelp,
  setLostGame,
  setFinishedGame,
} = progressSlice.actions;

export default progressSlice.reducer;
