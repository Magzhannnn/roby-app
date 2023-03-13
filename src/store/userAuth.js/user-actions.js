import { USER_LOGIN, USER_REGISTER } from "./user-constants";

export const userLogin = (data) => ({
  type: USER_LOGIN,
  payload: data,
});

export const userRegister = (data) => ({
  type: USER_REGISTER,
  payload: data,
});
