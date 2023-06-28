import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './createSlice'; 
import { filterReduser } from './filterSlice';
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
import { authReducer } from './userSlice'; 


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterReduser,
        auth: persistReducer(authPersistConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});




export const persistor = persistStore(store);