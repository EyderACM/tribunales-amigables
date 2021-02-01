import { IUserFormLogin, IUserFormRegister } from "models/user";
import AxiosConfig from "services/AxiosConfig";

export interface IRegisterUser extends AxiosConfig {
  userFormData: IUserFormRegister;
}

export interface ILoginUser extends AxiosConfig {
  userFormData: IUserFormLogin;
  remember: boolean;
}
