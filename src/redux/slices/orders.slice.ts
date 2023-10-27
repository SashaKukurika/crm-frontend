import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { CourseStatusEnum } from '../../enums';
import { IComment, IError, IOrder, IOrdersStatistic, IOrderWithPagination } from '../../interfaces';
import { orderService } from '../../services';

interface IState {
  orders: IOrder[];
  ordersStatistic: IOrdersStatistic;
  loading: boolean;
  error: IError;
  totalCount: number;
}

const initialState: IState = {
  orders: [],
  ordersStatistic: null,
  error: null,
  loading: true,
  totalCount: null,
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
const addComment = createAsyncThunk<IComment, { id: number; commentInfo: any }>(
  'ordersSlice/addComment',
  async ({ id, commentInfo }, { rejectWithValue }) => {
    try {
      const { data } = await orderService.addComment(id, commentInfo);
      return data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.response.data);
    }
  },
);

const getOrdersStatistic = createAsyncThunk<IOrdersStatistic>(
  'ordersSlice/getOrdersStatistics',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await orderService.getOrdersStatistic();
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
        state.totalCount = action.payload.totalCount;
      })
      .addCase(updateById.fulfilled, (state, action) => {
        const index = state.orders.findIndex((order) => order.id === action.payload.id);
        state.orders[index] = { ...state.orders[index], ...action.payload };
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.orders = state.orders.map((order) => {
          if (order.id === action.payload.orderId) {
            delete action.payload.orderId;
            const updatedComments = [action.payload, ...order.comments];
            return {
              ...order,
              comments: updatedComments,
              // якщо певний статус уже був ми його незмінюємо, якщож не було ставимо в роботу
              status: order.status ? order.status : CourseStatusEnum.IN_WORK,
              manager: action.payload.user,
            };
          }
          return order;
        });
      })
      .addCase(getOrdersStatistic.fulfilled, (state, action) => {
        state.ordersStatistic = action.payload;
      })
      .addMatcher(isPending(getAllWithPagination, updateById, getOrdersStatistic), (state) => {
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
  getOrdersStatistic,
  addComment,
};

export { ordersReducer, ordersActions };
