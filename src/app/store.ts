import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import authReducer from "./features/auth/auth.slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;