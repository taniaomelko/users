import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './reducers';
import { combineReducers } from "redux";

export const store = configureStore({
  reducer: combineReducers({
    users: usersReducer,
  })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
