export interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  is_active: boolean;
  // todo add enum
  role: string;
}
