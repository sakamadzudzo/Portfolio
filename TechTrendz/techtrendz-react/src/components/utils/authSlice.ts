import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Role, User } from '../../types/types';

interface AuthState {
    token: string | null;
    user: {} | null;
    referer?: string;
    roles?: Role[];
    auth?: {
        token: string | null;
        user: {} | null;
        referer?: string;
        roles?: Role[];
    }
}

const initialState: AuthState = {
    token: null,
    user: null,
    referer: "/",
    roles: [] as Role[]
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
        }
    },
});

export const { setToken, clearToken, setUser, clearUser, setReferer, clearReferer, setRoles } = authSlice.actions;
export default authSlice.reducer;
export type { AuthState };
export { initialState }