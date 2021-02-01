import axios from "axios";
import { ILoginUser, IRegisterUser } from "./interfaces";

function userService() {
  const registerUser = async ({ userFormData, config }: IRegisterUser) => {
    try {
      const res = await axios.post("users/register", userFormData, config);
      const { data } = await res;
      return data;
    } catch (error) {
      throw new Error();
    }
  };

  const logingUser = async ({ userFormData, config }: ILoginUser) => {
    try {
      const res = await axios.post("users/login", userFormData, config);
      const { data } = await res;
      return data;
    } catch (error) {
      throw new Error();
    }
  };

  return {
    registerUser,
    logingUser,
  };
}

export default userService();
