const baseURL = process.env.BASE_URL || 'http://localhost:6000';

const orders = '/orders';
const groups = '/groups';
const users = '/users';
const auth = '/auth';

const urls = {
  orders: {
    orders,
    getById: (id: number): string => `${orders}/${id}`,
    addComment: (id: number): string => `${orders}/${id}/comments`,
    getStatistic: `${orders}/statistic`,
    getExcel: `${orders}/excel`,
  },

  users: {
    users,
    getActivateToken: (id: number): string => `${users}/${id}/activateToken`,
    ban: (id: number): string => `${users}/${id}/ban`,
    unban: (id: number): string => `${users}/${id}/unban`,
  },
  auth: {
    auth,
    me: `${auth}/me`,
    login: `${auth}/login`,
    refreshToken: `${auth}/refresh`,
    activateUser: (activateToken: string) => `${auth}/activate/${activateToken}`,
  },
  groups: { groups },
};

export { baseURL, urls };
