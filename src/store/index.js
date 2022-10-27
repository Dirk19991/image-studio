import { configureStore } from '@reduxjs/toolkit';
import progressReducer from '../features/progress/progressSlice';
import answerSlice from '../features/answer/answerSlice';
export default configureStore({
  reducer: {
    progress: progressReducer,
    answer: answerSlice,
  },
});
