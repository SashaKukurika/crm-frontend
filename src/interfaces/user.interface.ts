export interface IUser {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    // todo add enum
    role: string;
}