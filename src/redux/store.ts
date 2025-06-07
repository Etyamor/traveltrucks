import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import camperReducer from './campers/slice.js';
import favoriteReducer from './favorites/slice.js';
import filterReducer from './filter/slice.js';

const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    filter: filterReducer,
    favorites: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
