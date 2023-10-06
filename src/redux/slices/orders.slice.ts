import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { IError, IOrder, IOrdersStatistics, IOrderWithPagination } from '../../interfaces';
import { orderService } from '../../services';

interface IState {
  ordersWithPagination: IOrderWithPagination;
  ordersStatistic: IOrdersStatistics;
  orderForUpdate: IOrder;
  trigger: boolean;
  loading: boolean;
  errors: IError;
}

const initialState: IState = {
  ordersWithPagination: null,
  ordersStatistic: null,
  errors: null,
  orderForUpdate: null,
  trigger: false,
  loading: true,
};

const getAllWithPagination = createAsyncThunk<IOrderWithPagination, URLSearchParams>(
  'ordersSlice/getAllWithPagination',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await orderService.getAllWithPagination(params);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

// перше що повертаю, друге що передаю в функцію
const update = createAsyncThunk<IOrder, { id: number; order: IOrder }>(
  'ordersSlice/update',
  async ({ id, order }, { rejectWithValue }) => {
    try {
      const { data } = await orderService.updateById(id, order);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const getOrdersStatistics = createAsyncThunk<IOrdersStatistics>(
  'ordersSlice/getOrdersStatistics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await orderService.getOrdersStatistics();
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const slice = createSlice({
  name: 'ordersSlice',
  initialState,
  reducers: {
    setOrderForUpdate: (state, action) => {
      state.orderForUpdate = action.payload;
    },
  },
  // extraReducers: {
  //   [getAllWithPagination.fulfilled]: (state, action) => {
  //     state.orders = action.payload;
  //   },
  // },
  extraReducers: (builder) =>
    builder
      .addCase(getAllWithPagination.fulfilled, (state, action) => {
        state.ordersWithPagination = action.payload;
        console.log(state.ordersWithPagination, 'state');
        console.log(action, 'action');
        state.loading = false;
      })
      .addCase(update.fulfilled, (state) => {
        state.orderForUpdate = null;
      })
      .addCase(getOrdersStatistics.fulfilled, (state, action) => {
        state.ordersStatistic = action.payload;
        console.log(state.ordersStatistic);
        state.loading = false;
      })
      // .addCase(getAllWithPagination.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(getAllWithPagination.rejected, (state, action) => {
      //   state.error = action.payload;
      //   state.loading = false;
      // })
      .addMatcher(isPending(), (state) => {
        state.loading = true;
        state.errors = null;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.loading = false;
        state.errors = null;
      })
      .addMatcher(isRejectedWithValue(), (state, action) => {
        state.errors = action.payload;
        state.loading = false;
      })
      .addMatcher(isFulfilled(update), (state) => {
        state.trigger = !state.trigger;
      }),
});

const { reducer: ordersReducer, actions } = slice;

const ordersActions = { ...actions, getAllWithPagination, update, getOrdersStatistics };

export { ordersReducer, ordersActions };
