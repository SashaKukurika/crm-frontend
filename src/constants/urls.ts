const baseURL = 'http://localhost:5000';

const orders = '/orders';
const groups = '/groups';
const users = '/users';
const auth = '/auth';

const urls = {
  orders: {
    orders,
    getById: (id: number): string => `${orders}/${id}`,
    addComment: (id: number): string => `${orders}/${id}/comments`,
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
  groups: { groups },
};

export { baseURL, urls };
