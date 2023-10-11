import { urls } from '../constants';

import { axiosService } from './axios.service';

const groupService = {
  getAll: () => axiosService.get(urls.groups.groups),
  create: (groupName: string) => axiosService.post(urls.groups.groups, { name: groupName }),
};

export { groupService };
