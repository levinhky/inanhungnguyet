import { auth } from "@/data/firebase";
import { setIsLoggedIn, setUserInfo } from "@/redux/features/authentication/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
  const dispatch = useAppDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        setUserInfo({
          displayName: user.displayName ?? "",
          email: user.email ?? "",
          emailVerified: user.emailVerified ?? false,
          isAnonymous: user.isAnonymous ?? false,
          phoneNumber: user.phoneNumber ?? "",
          photoURL: user.photoURL ?? "",
          uid: user.uid,
        })
      );
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
};

export default useAuth;