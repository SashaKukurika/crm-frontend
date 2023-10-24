import { IUser } from './user.interface';

export interface IComment {
  id: number;
  text: string;
  created_at: Date;
  // todo add type off user
  user: IUser;
  orderId?: number;
}
