import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CounterState {
  token: string,
  user: {} | undefined
}

const initialState: CounterState = {
  token: "",
  user: undefined
}

export const authSlice = createSlice({
  name: "authActions",
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    resetToken: (state) => {
      state.token = ""
    },
    setUser: (state, action: PayloadAction<Object>) => {
      state.user = action.payload
    },
    resetUser: (state) => {
      state.user = undefined
    }
  }
})

export const { setToken, setUser, resetToken, resetUser } = authSlice.actions

export const authToken = (state: RootState) => state.auth.token

export const authUser = (state: RootState) => state.auth.user

export default authSlice.reducer