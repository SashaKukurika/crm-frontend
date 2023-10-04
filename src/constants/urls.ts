const baseURL = 'http://localhost:5000';

const orders = '/orders';
const users = '/users';
const auth = '/auth';

const urls = {
  orders: {
    orders,
    getById: (id: number): string => `${orders}/${id}`,
    getStatistics: `${orders}/statistics`,
    getExel: `${orders}/exel`,
  },

  users: {
    users,
  },
  auth: {
    auth,
    login: `${auth}/login`,
    refreshToken: `${auth}/refresh-token`,
  },
};

export { baseURL, urls };
