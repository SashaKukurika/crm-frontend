import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer, groupReducer, ordersReducer, usersReducer } from './slices';

const rootReducers = combineReducers({
  ordersReducer,
  groupReducer,
  usersReducer,
  authReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducers,
  });

// отримуємо тип даних який нам повертає rootReducers
type RootState = ReturnType<typeof rootReducers>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore['dispatch'];

export type { RootState, AppStore, AppDispatch };

export { setupStore };
