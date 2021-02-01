import { IUserFormLogin, IUserFormRegister } from "models/user";
import AxiosConfig from "services/AxiosConfig";

export interface IRegisterUser extends AxiosConfig {
  userFormData: IUserFormLogin;
}

export interface ILoginUser extends AxiosConfig {
  userFormData: IUserFormRegister;
  remember: boolean;
}
