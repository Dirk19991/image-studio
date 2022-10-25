import { configureStore } from '@reduxjs/toolkit';
import progressReducer from '../features/progress/progressSlice';

export default configureStore({
  reducer: {
    progress: progressReducer,
  },
});
