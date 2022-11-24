import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// @ts-ignore
import progressReducer from '../features/progressPanel/progressSlice';
// @ts-ignore
import answerReducer from '../features/questionsPanel/answerSlice';
// @ts-ignore
import incorrectAnswersSlice from '../features/questionsPanel/incorrectAnswersSlice';

const rootReducer = combineReducers({
  progress: progressReducer,
  answer: answerReducer,
  incorrectAnswers: incorrectAnswersSlice,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export type RootReducer = ReturnType<typeof rootReducer>;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
