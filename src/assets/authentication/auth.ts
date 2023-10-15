import { auth } from "@/data/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { Toast } from "../libs/toast";

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export function handleGoogleLogin() {
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      Toast.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    });
}

export function handleFacebookLogin() {
  signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      Toast.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    });
}

export function handleSignUp(name: string, email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Toast.fire({
        icon: "success",
        title: "Đăng ký thành công!",
      });
      setTimeout(() => {
        Toast.fire({
          icon: "success",
          title: "Bạn đã được đăng nhập tự động",
        });
      }, 2000);
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        sendEmailVerification(auth.currentUser);
      }
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    });
}

export function handleLogin(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Toast.fire({
        icon: "success",
        title: "Đăng nhập thành công!",
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    });
}

export async function handleResetPassword(email: string) {
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      Toast.fire({
        icon: "success",
        title: "Thư đặt lại mật khẩu đã gửi!",
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: error.message,
      });
    });
}
