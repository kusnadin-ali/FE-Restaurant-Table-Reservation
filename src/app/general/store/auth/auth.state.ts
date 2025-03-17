export interface AuthState {
  token: string | null;
  userType: string | null;
  error: string | null;
}

export const initialAuthState: AuthState = {
  token: null,
  error: null,
  userType: null
};
