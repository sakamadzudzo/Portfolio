import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    user: {} | null;
}

const initialState: AuthState = {
    token: null,
    user: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
        setUser: (state, action: PayloadAction<Object>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }
    },
});

export const { setToken, clearToken, setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
export type { AuthState };
export { initialState }