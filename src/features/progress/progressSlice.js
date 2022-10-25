import { createSlice } from '@reduxjs/toolkit';

const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    progress: 14,
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
  },
  reducers: {
    setProgress(state, action) {
      state.progress = action.payload;
    },
  },
});

export const { setProgress } = progressSlice.actions;

export default progressSlice.reducer;
