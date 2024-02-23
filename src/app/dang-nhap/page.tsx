"use client";

import {
  handleFacebookLogin,
  handleGoogleLogin,
  handleLogin,
  handleResetPassword,
  handleSignUp,
} from "@/assets/authentication/auth";
import ForgotPasswordForm from "@/components/Authentication/ForgotPasswordForm";
import LoginForm from "@/components/Authentication/LoginForm";
import SignupForm from "@/components/Authentication/SignupForm";
import BreadCrumb from "@/components/BreadCrumb";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {};

const defaultLoginFormFields = {
  email: "",
  password: "",
};

const defaultSignupFormFields = {
  fullname: "",
  email: "",
  password: "",
};

export default function AuthenticationPage({}: Props) {
  const [loginData, setLoginData] = useState(defaultLoginFormFields);
  const [signUpData, setSignupData] = useState(defaultSignupFormFields);
  const [isForgotPasswordForm, setIsForgotPasswordForm] = useState(false);
  const [forgotPasswordValue, setForgotPasswordValue] = useState("");

  const [loginErrors, setLoginErrors] = useState(defaultLoginFormFields);
  const [signupErrors, setSignupErrors] = useState(defaultSignupFormFields);
  const [forgotPasswordError, setForgotPasswordError] = useState("");

  const user = useAppSelector((state: RootState) => state.auth.userInfo);
  const router = useRouter();

  useEffect(() => {
    if (user.uid) {
      setLoginData(defaultLoginFormFields);
      setSignupData(defaultSignupFormFields);
      setTimeout(() => router.push("/"), 1500);
    }
  }, [user]);

  const handleChangeLoginForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    switch (name) {
      case "email":
        if (!emailRegex.test(value)) {
          setLoginErrors({ ...loginErrors, email: "Email không hợp lệ!" });
        } else {
          setLoginErrors({ ...loginErrors, email: "" });
        }
        break;

      case "password":
        if (value.length === 0) {
          setLoginErrors({
            ...loginErrors,
            password: "Mật khẩu không được để trống!",
          });
        } else {
          setLoginErrors({ ...loginErrors, password: "" });
        }
        break;

      default:
        break;
    }

    setLoginData({ ...loginData, [name]: value });
  };

  const handleChangeSignupForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    switch (name) {
      case "email":
        if (!emailRegex.test(value)) {
          setSignupErrors({ ...signupErrors, email: "Email không hợp lệ!" });
        } else {
          setSignupErrors({ ...signupErrors, email: "" });
        }
        break;

      case "fullname":
        if (value.length === 0) {
          setSignupErrors({
            ...signupErrors,
            fullname: "Họ và tên không được để trống!",
          });
        } else {
          setSignupErrors({ ...signupErrors, fullname: "" });
        }
        break;

      case "password":
        if (value.length < 6) {
          setSignupErrors({
            ...signupErrors,
            password: "Mật khẩu ít nhất 6 ký tự!",
          });
        } else {
          setSignupErrors({ ...signupErrors, password: "" });
        }
        break;

      default:
        break;
    }

    setSignupData({ ...signUpData, [name]: value });
  };

  const hasLoginError = Object.values(loginErrors).some((error) => error !== "");

  const hasSignupError = Object.values(signupErrors).some((error) => error !== "");

  const loginWithTitle = <h3 className="font-bold rock:text-xl text-lg">Đăng nhập bằng</h3>;
  const loginTitle = isForgotPasswordForm ? "Đăng Nhập" : "Quên mật khẩu?";

  const renderOr = () => {
    return (
      <div className="w-full relative mt-10 mb-5 border-b border-b-[#dfdfdf]">
        <span className="absolute left-2/4 -translate-x-2/4 -top-3 rock:text-sm text-xs bg-white px-2 uppercase">
          Hoặc
        </span>
      </div>
    );
  };

  const renderSocialLogin = () => {
    return (
      <div className="text-center mt-5">
        <button onClick={handleFacebookLogin} className="text-white indent-8 h-6 rounded-xl pr-3 mx-1" id="facebook">
          Facebook
        </button>
        <button onClick={handleGoogleLogin} className="text-white indent-8 h-6 rounded-xl pr-3 mx-1" id="google">
          Google
        </button>
      </div>
    );
  };

  const renderButtonActionLogin = () => {
    return (
      <>
        <button
          onClick={() =>
            isForgotPasswordForm
              ? handleResetPassword(forgotPasswordValue)
              : handleLogin(loginData.email, loginData.password)
          }
          disabled={hasLoginError || forgotPasswordError.length > 0 ? true : false}
          className={`w-full p-2.5 border rounded-lg text-sm ${
            hasLoginError
              ? ""
              : "rock:hover:bg-[var(--blue)] rock:hover:text-white rock:duration-75 rock:delay-75 rock:ease-in-out"
          }`}
        >
          {loginTitle}
        </button>

        <p
          onClick={() => setIsForgotPasswordForm(!isForgotPasswordForm)}
          className="text-sm w-fit cursor-pointer rock:hover:text-[var(--blue-text)] text-left mt-2"
        >
          {loginTitle}
        </p>
      </>
    );
  };

  return (
    <div className="container mx-auto rock:text-base text-center text-sm">
      <style jsx>{`
        #facebook {
          background: #546ea6 url(/icons/fb.png) no-repeat 0 center;
        }
        #google {
          background: #df5656 url(/icons/gg.png) no-repeat 0 center;
        }
      `}</style>
      <BreadCrumb />
      {loginWithTitle}

      {renderSocialLogin()}

      {renderOr()}

      <section className="flex rock:flex-nowrap flex-wrap rock:gap-10 gap-7">
        <div className="w-full" id="login-form">
          <h2 className="text-center rock:text-lg text-base uppercase mb-3">{loginTitle}</h2>

          {isForgotPasswordForm ? (
            <ForgotPasswordForm
              setForgotPasswordValue={setForgotPasswordValue}
              setForgotPasswordError={setForgotPasswordError}
              forgotPasswordError={forgotPasswordError}
            />
          ) : (
            <LoginForm handleChangeLoginForm={handleChangeLoginForm} loginErrors={loginErrors} />
          )}

          {renderButtonActionLogin()}
        </div>

        <SignupForm
          handleChangeSignupForm={handleChangeSignupForm}
          signupErrors={signupErrors}
          hasSignupError={hasSignupError}
          handleSignUp={handleSignUp}
          signUpData={signUpData}
        />
      </section>
    </div>
  );
}
