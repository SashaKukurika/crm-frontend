import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue } from '@reduxjs/toolkit';

import { orderService } from '../../services';
import { IError, IOrder } from '../../interfaces';

interface IState {
  orders: IOrder[],
  orderForUpdate: IOrder,
  trigger: boolean,
  loading: boolean,
  errors: IError,
}

const initialState: IState = {
  orders: [],
  errors: null,
  orderForUpdate: null,
  trigger: false,
  loading: true

}

const getAllWithPagination = createAsyncThunk(
  'ordersSlice/getAllWithPagination',
  async (arg, thunkAPI) => {
    try {
      const { data } = await orderService.getAllWithPagination();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue('e.response.data');
    }
  },
);

const update = createAsyncThunk('ordersSlice/update', async ({ id, order }, thunkAPI) => {
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
        state.error = null;
      })
      .addMatcher(isFulfilled(), (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isRejectedWithValue(), (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addMatcher(isFulfilled(update), (state) => {
        state.trigger = !state.trigger;
      }),
});

const { reducer: ordersReducer, actions } = slice;

const ordersActions = { ...actions, getAllWithPagination, update };

export { ordersReducer, ordersActions };
