import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IAuth, IUser } from '../../interfaces';
import { authService } from '../../services';

interface IState {
  loading: boolean;
  error: any;
  me: IUser;
}

const initialState: IState = {
  loading: false,
  error: null,
  me: null,
};

const login = createAsyncThunk<IUser, IAuth>(
  'authSlice/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await authService.login(credentials);
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);
const slice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.me = action.payload;
        // history.replace("/orders");
      })
      .addMatcher(isPending(), (state) => {
        state.loading = true;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isRejectedWithValue(), (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }),
});

const { actions, reducer: authReducer } = slice;

const authActions = {
  ...actions,
  login,
};

export { authReducer, authActions };
