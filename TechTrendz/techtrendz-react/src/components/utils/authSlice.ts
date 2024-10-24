import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, User } from '../../types/types';

interface AuthState {
    token: string | null;
    user: User | null;
    referer?: string;
    roles?: Role[];
    isAuthenticated?: boolean;
    auth?: {
        token: string | null;
        user: User | null;
        referer?: string;
        roles?: Role[];
        isAuthenticated?: boolean;
    }
}

const initialState: AuthState = {
    token: null,
    user: null,
    referer: "/",
    roles: [] as Role[],
    isAuthenticated: false
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
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null
        }, setReferer: (state, action: PayloadAction<string>) => {
            state.referer = action.payload
        },
        clearReferer: (state) => {
            state.referer = "/"
        },
        setRoles: (state, action: PayloadAction<Role[]>) => {
            state.roles = action.payload
        },
        clearRoles: (state) => {
            state.roles = [] as Role[]
        },
        setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload
        },
        clearIsAuthenticated: (state) => {
            state.isAuthenticated = false
        }
    },
});

export const { setToken, clearToken, setUser, clearUser, setReferer, clearReferer, setRoles, clearRoles, setIsAuthenticated, clearIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
export type { AuthState };
export { initialState }