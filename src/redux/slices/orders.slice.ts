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
  orders: IOrder[];
  ordersStatistic: IOrdersStatistics;
  loading: boolean;
  error: IError;
  pageCount: number;
}

const initialState: IState = {
  orders: [],
  ordersStatistic: null,
  error: null,
  loading: true,
  pageCount: null,
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
  'ordersSlice/updateById',
  async ({ id, order }, { rejectWithValue, getState }) => {
    try {
      console.log(order);
      const { data } = await orderService.updateById(id, order);
      console.log(data);
      const state = getState() as any;
      const { groups } = state.groupReducer;

      const group = groups.find((group: any) => group.id === data.group);
      console.log(group);
      return { ...data, group };
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
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getAllWithPagination.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.pageCount = action.payload.pageCount;
      })
      .addCase(updateById.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.orders.findIndex((order) => order.id === action.payload.id);
        state.orders[index] = action.payload;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        console.log(action.payload.id);
        state.orders = state.orders.map((order) => {
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
