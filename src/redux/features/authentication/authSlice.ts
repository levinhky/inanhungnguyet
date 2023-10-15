import { Toast } from "@/assets/libs/toast";
import { auth } from "@/data/firebase";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";

export type UserAttributes = {
  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string;
  photoURL: string;
  uid: string;
};

export interface AuthState {
  userInfo: UserAttributes;
}

const initialState: AuthState = {
  userInfo: {
    displayName: "",
    email: "",
    emailVerified: false,
    isAnonymous: false,
    phoneNumber: "",
    photoURL: "",
    uid: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUserInfo: (state, action: PayloadAction<UserAttributes>) => {
      state.userInfo = action.payload;
    },
    handleSignOut: (state) => {
      state.userInfo = {
        displayName: "",
        email: "",
        emailVerified: false,
        isAnonymous: false,
        phoneNumber: "",
        photoURL: "",
        uid: "",
      };

      signOut(auth)
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Đăng xuất thành công!",
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: error.message,
          });
        });
    },
  },
});

export const { getUserInfo, handleSignOut } = authSlice.actions;

export default authSlice.reducer;