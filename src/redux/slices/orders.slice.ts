import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit';

import { orderService } from '../../services';
import { IError, IOrder, IOrderWithPagination } from '../../interfaces';
import { AxiosError } from 'axios';

interface IState {
  orders: IOrderWithPagination,
  orderForUpdate: IOrder,
  trigger: boolean,
  loading: boolean,
  errors: IError,
}

const initialState: IState = {
  orders: null,
  errors: null,
  orderForUpdate: null,
  trigger: false,
  loading: true

}

const getAllWithPagination = createAsyncThunk<IOrderWithPagination, void>(
  'ordersSlice/getAllWithPagination',
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await orderService.getAllWithPagination();
      return data;
    } catch (e) {
      const err = e as AxiosError
      return rejectWithValue(err.response.data)
    }
  },
);

const update = createAsyncThunk<IOrder>('ordersSlice/update', async ({id, }, thunkAPI) => {
  try {
    await orderService.updateById(id, order);
  } catch (e) {
    return thunkAPI.rejectWithValue('e.response.data');
  }
});

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
        state.orders = action.payload;
        state.loading = false;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.orderForUpdate = null;
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

const ordersActions = { ...actions, getAllWithPagination, update };

export { ordersReducer, ordersActions };
