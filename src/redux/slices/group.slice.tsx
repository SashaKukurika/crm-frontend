import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IError } from '../../interfaces';
import { IGroup } from '../../interfaces/group.interface';
import { groupService } from '../../services/group.service';

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

const getAll = createAsyncThunk<IGroup[]>('groupSlice/getAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await groupService.getAll();
    return data;
  } catch (e) {
    const err = e as AxiosError;
    return rejectWithValue(err.response.data);
  }
});

const slice = createSlice({
  name: 'groupSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.groups = action.payload;
        state.loading = false;
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
};

export { groupActions, groupReducer };
