import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from "../features/sidebarSlice";
import authReducer from "../features/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        sidebar: sidebarReducer
    },
})

export default store;