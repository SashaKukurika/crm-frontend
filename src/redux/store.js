import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { count1Reducer, count2Reducer } from './slices';

const rotReducers = combineReducers({
  count1: count1Reducer,
  count2: count2Reducer,
});

const setupStore = () =>
  configureStore({
    reducer: rotReducers,
  });

export { setupStore };
