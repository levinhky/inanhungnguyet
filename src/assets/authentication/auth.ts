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
import { useTranslations } from "next-intl";

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();
const t = useTranslations("validation");

const handleErrorMessage = (error: any) => {
  let message = "";
  if (error.code === "auth/invalid-email") {
    message = t("emailNotEmpty");
  } else if (error.code === "auth/missing-password") {
    message = t("passwordNotEmpty");
  }

  return message;
};

export function handleGoogleLogin() {
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      Toast.fire({
        icon: "success",
        title: t("loginSucess"),
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: t("authError"),
      });
    });
}

export function handleFacebookLogin() {
  signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      Toast.fire({
        icon: "success",
        title: t("loginSucess"),
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: t("authError"),
      });
    });
}

export function handleSignUp(name: string, email: string, password: string) {
  if (name !== "") {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Toast.fire({
          icon: "success",
          title: t("registerSuccess"),
        });
        setTimeout(() => {
          Toast.fire({
            icon: "success",
            title: t("loginAutomatic"),
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
          title: handleErrorMessage(error),
        });
      });
  } else {
    Toast.fire({
      icon: "error",
      title: t("nameNotEmpty"),
    });
  }
}

export function handleLogin(email: string, password: string) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      Toast.fire({
        icon: "success",
        title: t("loginSucess"),
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: handleErrorMessage(error),
      });
    });
}

export async function handleResetPassword(email: string) {
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      Toast.fire({
        icon: "success",
        title: t("resetPasswordSend"),
      });
    })
    .catch((error) => {
      Toast.fire({
        icon: "error",
        title: t("authError"),
      });
    });
}
