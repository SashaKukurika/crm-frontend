import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IError, IGroup } from '../../interfaces';
import { groupService } from '../../services';

interface IState {
  groups: IGroup[];
  count: 0;
  previousPage: string;
  nextPage: string;
  loading: boolean;
  error: IError;
}

const initialState: IState = {
  groups: [],
  count: 0,
  previousPage: null,
  nextPage: null,
  loading: false,
  error: null,
};

const getAll = createAsyncThunk<IGroup[], void>(
  'groupSlice/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await groupService.getAll();
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const create = createAsyncThunk<IGroup, { name: string }>(
  'groupSlice/create',
  async ({ name }, { rejectWithValue }) => {
    try {
      const { data } = await groupService.create(name);
      console.log(data);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const slice = createSlice({
  name: 'groupSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.groups = [...state.groups, ...action.payload];
      })
      .addCase(create.fulfilled, (state, action) => {
        state.groups = [...state.groups, action.payload];
      })
      .addMatcher(isPending(), (state) => {
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

const { reducer: groupReducer, actions } = slice;

const groupActions = {
  ...actions,
  getAll,
  create,
};

export { groupActions, groupReducer };
