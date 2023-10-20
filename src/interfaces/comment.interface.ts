export interface IComment {
  id: number;
  text: string;
  created_at: Date;
  // todo add type off user
  user: any;
}
