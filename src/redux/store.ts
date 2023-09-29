import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { count2Reducer, ordersReducer } from './slices';

const rotReducers = combineReducers({
  ordersReducer,
  count2: count2Reducer,
});

const setupStore = () =>
  configureStore({
    reducer: rotReducers,
  });

// отримуємо тип даних який нам повертає rotReducers
type RootState = ReturnType<typeof rotReducers>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type { RootState, AppStore, AppDispatch };

export { setupStore };
