import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    token: string | null;
    user: {} | null;
    referer?: string;
    auth?: {
        token: string | null
        user: {} | null
        referer: string | null
    }
}

const initialState: AuthState = {
    token: null,
    user: null,
    referer: "/"
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
        }, setReferer: (state, action: PayloadAction<string>) => {
            state.referer = action.payload
        },
        clearReferer: (state) => {
            state.referer = "/"
        }
    },
});

export const { setToken, clearToken, setUser, clearUser, setReferer, clearReferer } = authSlice.actions;
export default authSlice.reducer;
export type { AuthState };
export { initialState }