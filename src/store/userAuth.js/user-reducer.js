import { USER_LOGIN, USER_REGISTER } from "./user-constants";

export const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      console.log(payload);
      return state;
    }
    case USER_REGISTER: {
      const resultState = [...state, payload];
      const saveUsers = JSON.parse(localStorage.getItem("users"));
      if (saveUsers === null) {
        localStorage.setItem("users", JSON.stringify([payload]));
      } else {
        localStorage.setItem("users", JSON.stringify([...saveUsers, payload]));
      }
      return resultState;
    }
    default:
      return state;
  }
};
