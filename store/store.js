import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/slices/authSlice";
import wishlistReducer from '../features/slices/wishlistSlice'
import { redux_logger } from 'funckage/lib/helpers'
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    
        user: authSlice,
        wishlist: wishlistReducer
    ,
    // middleware: ( getDefaultMiddleWare ) => {
    //     return getDefaultMiddleWare().concat(redux_logger)
    // }
})
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ['wishlist'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer
});