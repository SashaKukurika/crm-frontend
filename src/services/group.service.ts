import { urls } from '../constants';

import { axiosService } from './axios.service';

const groupService = {
  getAll: () => axiosService.get(urls.groups.groups),
  create: (group: string) => axiosService.post(urls.groups.groups, group),
};

export { groupService };
