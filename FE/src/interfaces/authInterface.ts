export interface IAuth {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
}

export interface IUser {
  id: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  auth: IAuth;
}
