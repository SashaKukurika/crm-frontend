import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { CourseStatusEnum } from '../../enums';
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
const updateById = createAsyncThunk<IOrder, { id: number; order: Partial<IOrder> }>(
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

// перше що повертаю, друге що передаю в функцію
const addComment = createAsyncThunk<any, { id: number; commentInfo: any }>(
  'ordersSlice/addComment',
  async ({ id, commentInfo }, { rejectWithValue }) => {
    try {
      console.log(commentInfo, 'comment');
      const { data } = await orderService.addComment(id, commentInfo);
      console.log(data, 'data addComment');
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
  extraReducers: (builder) =>
    builder
      .addCase(getAllWithPagination.fulfilled, (state, action) => {
        state.ordersWithPagination = action.payload;
        state.loading = false;
      })
      .addCase(updateById.fulfilled, (state, action) => {
        // state.ordersWithPagination.orders = action.payload;
        const index = state.ordersWithPagination.orders.findIndex(
          (order) => order.id === action.payload.id,
        );
        state.ordersWithPagination.orders[index] = action.payload;
        state.loading = false;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        console.log(action.payload, 'action.payload');
        state.ordersWithPagination.orders = state.ordersWithPagination.orders.map((order) => {
          if (order.id === action.payload.order_id) {
            return {
              ...order,
              comments: [action.payload, ...order.comments],
              status: CourseStatusEnum.IN_WORK,
              // manager: action.payload.manager,
            };
          }
          return order;
        });
      })
      // .addCase(addComment.fulfilled, (state, action) => {
      //   state.ordersWithPagination.orders = state.ordersWithPagination.orders.map(
      //     (order): IOrder => {
      //       if (order.id === action.payload) {
      //         return {
      //           ...order,
      //         };
      //         return order;
      //       }
      //     },
      //   );
      // })
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
      .addMatcher(isFulfilled(updateById), (state) => {
        state.trigger = !state.trigger;
      }),
});

const { reducer: ordersReducer, actions } = slice;

const ordersActions = {
  ...actions,
  getAllWithPagination,
  updateById,
  getOrdersStatistics,
  addComment,
};

export { ordersReducer, ordersActions };
