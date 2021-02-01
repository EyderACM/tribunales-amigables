export interface IUserFormLogin {
  email: string;
  password: string;
}

export interface IUserFormRegister extends IUserFormLogin {
  password_confirmation: string;
}
