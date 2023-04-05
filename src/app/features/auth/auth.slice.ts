import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../interfaces/user.interface";

interface AuthState {
    isLoggedIn: boolean;
    user?: User;
}

const initialState: AuthState = {
    isLoggedIn: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = undefined
        },
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        }
    }
});

export const { logout, setUser } = authSlice.actions;

export default authSlice.reducer;