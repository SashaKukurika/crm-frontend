import { urls } from '../constants';
import { IGroup } from '../interfaces';
import { IRes } from '../types';

import { axiosService } from './axios.service';

const groupService = {
  getAll: (): IRes<IGroup[]> => axiosService.get(urls.groups.groups),
  create: (groupName: string): IRes<IGroup> =>
    axiosService.post(urls.groups.groups, { name: groupName }),
};

export { groupService };
