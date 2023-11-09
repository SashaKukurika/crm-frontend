import { IUser } from './user.interface';

export interface IComment {
  id: number;
  text: string;
  created_at: Date;
  user: IUser;
  orderId?: number;
}
