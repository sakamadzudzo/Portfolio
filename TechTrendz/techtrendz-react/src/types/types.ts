// Auth State
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: any;
  error: string | null;
}

// App State
export interface AppState {
  auth: AuthState;
}
