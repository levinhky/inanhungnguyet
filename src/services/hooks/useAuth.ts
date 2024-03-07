import { auth } from "@/data/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const useAuth = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignIn(true);
    } else {
      setIsSignIn(false);
    }
  });

  return isSignIn
    ? {
        // userInfo: {
        //   displayName: user.displayName ?? "",
        //   email: user.email ?? "",
        //   emailVerified: user.emailVerified ?? false,
        //   isAnonymous: user.isAnonymous ?? false,
        //   phoneNumber: user.phoneNumber ?? "",
        //   photoURL: user.photoURL ?? "",
        //   uid: user.uid,
        // },
        isSignIn: true,
      }
    : null;
};

export default useAuth;
