import { createReducer, on  } from "@ngrx/store";
import { initialAuthState } from "./auth.state";
import { loginFailure, loginSuccess, logout } from "./auth.actions";

export const authReducer = createReducer(
  initialAuthState,
  on(loginSuccess, (state, { token, userType }) => ({
    ...state,
    token,
    error: null,
    userType
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    token: null,
    error,
    userType: null
  })),
  on(logout, () => initialAuthState)
);
