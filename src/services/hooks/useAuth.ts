import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

const useAuth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState<any>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignIn(true);
      setUser(user);
    } else {
      setIsSignIn(false);
    }
  });

  return {
    user,
    isSignIn,
  };
};

export default useAuth;
