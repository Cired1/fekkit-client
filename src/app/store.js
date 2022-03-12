import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from "../features/sidebarSlice";
import communityReducer from "../features/communitySlice";
import authReducer from "../features/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        community: communityReducer,
        sidebar: sidebarReducer
    },
})

export default store;