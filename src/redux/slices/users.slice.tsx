import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IStatistic, IUser, IUserWithPagination } from '../../interfaces';
import { userService } from '../../services';

interface IState {
  users: IUser[];
  // todo add type userStatistic
  userStatistic: IStatistic;
  totalCount: number;
  next: string;
  previous: string;
  loading: boolean;
  error: any;
}

const initialState: IState = {
  users: [],
  userStatistic: null,
  totalCount: 0,
  next: null,
  previous: null,
  loading: true,
  error: null,
};

const getAll = createAsyncThunk<IUserWithPagination, URLSearchParams>(
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

const getStatistic = createAsyncThunk<IStatistic, { id: number }>(
  'usersSlice/getStatistic',
  async ({ id }, { rejectWithValue }) => {
    try {
      const { data } = await userService.getStatistic(id);
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
      .addCase(getStatistic.fulfilled, (state, action) => {
        console.log(action.payload);
        state.userStatistic[action.meta.arg.id] = action.payload;
      })
      .addMatcher(isPending(create, getAll), (state) => {
        state.loading = true;
        state.error = null;
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
  getStatistic,
};

export { usersReducer, usersActions };
