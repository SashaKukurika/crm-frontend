import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IUser, IUserWithStatisticAndPagination } from '../../interfaces';
import { userService } from '../../services';

interface IState {
  users: IUser[];
  totalCount: number;
  loading: boolean;
  error: any;
}

const initialState: IState = {
  users: [],
  totalCount: 0,
  loading: true,
  error: null,
};

const getAll = createAsyncThunk<IUserWithStatisticAndPagination, URLSearchParams>(
  'usersSlice/getAll',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await userService.getAll(params);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const create = createAsyncThunk<IUser, Partial<IUser>>(
  'usersSlice/create',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await userService.createUser(user);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const activate = createAsyncThunk<void, { activateToken: string; password: string }>(
  'usersSlice/activate',
  async ({ activateToken, password }, { rejectWithValue }) => {
    try {
      const { data } = await userService.activate(activateToken, password);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);
const ban = createAsyncThunk<IUser, { id: number }>(
  'usersSlice/ban',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await userService.ban(id);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const unban = createAsyncThunk<IUser, { id: number }>(
  'usersSlice/unban',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await userService.unban(id);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const slice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.totalCount = action.payload.totalCount;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.users = [action.payload, ...state.users];
      })
      .addCase(ban.fulfilled, (state, action) => {
        const user = state.users.find((user) => user.id === action.payload.id);
        user.is_active = action.payload.is_active;
      })
      .addCase(unban.fulfilled, (state, action) => {
        const user = state.users.find((user) => user.id === action.payload.id);
        user.is_active = action.payload.is_active;
      })
      .addMatcher(isPending(create, getAll), (state) => {
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

const { reducer: usersReducer, actions } = slice;

const usersActions = {
  ...actions,
  getAll,
  create,
  ban,
  unban,
  activate,
};

export { usersReducer, usersActions };
