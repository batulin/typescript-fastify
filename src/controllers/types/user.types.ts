
export interface IUserReply {
  id: number;
  email: string;
  name: string | null;
}
export interface IUserBody {
  user: {
    email: string;
    name: string | null;
    password: string;
  }
}