import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session"; 

const getSessionStorageData = () => {
    const storedData = sessionStorage.getItem("authUser");
    console.log("Stored data:", storedData);
    try {
      return storedData ? JSON.parse(storedData) : null;
    } catch (error) {
      console.error("Error parsing stored data:", error);
      return null;
    }
  };

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: getSessionStorageData() || {
      name: "",
      password: "",
      authUser: false
    }
  },
  reducers: {
    login(state, action) {
      const userId = action.payload;
      const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name);
      const passwordValidation = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,10}$/i.test(userId.password);

      state.user = userId;
      if (!userValidation || !passwordValidation) {
        state.user.authUser = false;
      } else {
        state.user.authUser = true;
      }
    },
    logout(state) {
      state.user = {
        name: "",
        password: "",
        authUser: false
      };
    }
  }
});

// Create a persist config object
const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whitelist: ["auth"] // Specify the slice(s) you want to persist
};

// Wrap the authSlice reducer with persistReducer
const persistedAuthSliceReducer = persistReducer(persistConfig, authSlice.reducer);

export const { login, logout } = authSlice.actions;
export default persistedAuthSliceReducer;
