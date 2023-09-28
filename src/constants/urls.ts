const baseURL = 'http://localhost:5000';

const urls = {
  orders: '/orders',
  orderById: (id: number): string => `/orders/${id}`,
  ordersStatistics: '/orders/statistics',
  users: '/users',
  auth: '/auth',
  login: '/auth/login',
  refreshToken: '/auth/refresh-token',
};

export { baseURL, urls };
