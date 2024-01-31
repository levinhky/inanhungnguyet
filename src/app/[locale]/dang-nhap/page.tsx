"use client";

import { handleFacebookLogin, handleGoogleLogin, handleLogin, handleSignUp } from "@/assets/authentication/auth";
import BreadCrumb from "@/components/BreadCrumb";
import { RootState } from "@/redux/store";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  const user = useSelector((state: RootState) => state.auth.userInfo);
  const router = useRouter();
  const t = useTranslations("validation");
  const t_global = useTranslations("");

  useEffect(() => {
    if (user.uid) {
      setLoginData(defaultLoginFormFields);
      setSignupData(defaultSignupFormFields);
      setTimeout(() => router.push("/"), 1500);
      console.log(user);
    }
  }, [user]);

  const handleChangeLoginForm = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    switch (name) {
      case "email":
        if (!emailRegex.test(value)) {
          setLoginErrors({ ...loginErrors, email: t("invalidEmail") });
        } else {
          setLoginErrors({ ...loginErrors, email: "" });
        }
        break;

      case "password":
        if (value.length === 0) {
          setLoginErrors({
            ...loginErrors,
            password: t("passwordNotEmpty"),
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
          setSignupErrors({ ...signupErrors, email: t("invalidEmail") });
        } else {
          setSignupErrors({ ...signupErrors, email: "" });
        }
        break;

      case "fullname":
        if (value.length === 0) {
          setSignupErrors({
            ...signupErrors,
            fullname: t("nameNotEmpty"),
          });
        } else {
          setSignupErrors({ ...signupErrors, fullname: "" });
        }
        break;

      case "password":
        if (value.length < 6) {
          setSignupErrors({
            ...signupErrors,
            password: t("min.passwordSix"),
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

  const hasLoginErrors = Object.values(loginErrors).some((error) => error !== "");

  const hasSignupErrors = Object.values(signupErrors).some((error) => error !== "");

  return (
    <div className="container mx-auto rock:text-base text-center text-sm">
      <style jsx>{`
        #fb {
          background: #546ea6 url(/icons/fb.png) no-repeat 0 center;
        }
        #gg {
          background: #df5656 url(/icons/gg.png) no-repeat 0 center;
        }
      `}</style>
      <BreadCrumb />
      <h1 className="font-bold rock:text-xl text-lg">{t_global("loginWith")}</h1>

      <div className="text-center mt-5">
        <button onClick={handleFacebookLogin} className="text-white indent-8 h-6 rounded-xl pr-3 mx-1" id="fb">
          Facebook
        </button>
        <button onClick={handleGoogleLogin} className="text-white indent-8 h-6 rounded-xl pr-3 mx-1" id="gg">
          Google
        </button>
      </div>

      <div className="w-full relative mt-10 mb-5 border-b border-b-[#dfdfdf]">
        <span className="absolute left-2/4 -translate-x-2/4 -top-3 rock:text-sm text-xs bg-white px-2 uppercase">
          {t_global("or")}
        </span>
      </div>

      <section className="flex rock:flex-nowrap flex-wrap rock:gap-10 gap-7">
        <div className="w-full" id="login-form">
          <h2 className="text-center rock:text-lg text-base uppercase mb-3">
            {isForgotPasswordForm ? t_global("forgotPassword") : t_global("login")}
          </h2>

          {isForgotPasswordForm ? (
            <>
              <p className="text-[#333] text-left rock:mb-6 mb-3 text-sm">{t_global("resetPasswordNote")}</p>
              <div className="relative rock:mb-6 mb-3 form-group">
                <div>
                  <div className="absolute inset-y-0 left-0 max-h-10 flex items-center pl-3.5 pointer-events-none">
                    <MailOutlined />
                  </div>
                  <input
                    onInput={(e: ChangeEvent<HTMLInputElement>) => {
                      setForgotPasswordValue(e.target.value);
                      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                      if (!emailRegex.test(e.target.value)) {
                        setForgotPasswordError(t("invalidEmail"));
                      } else {
                        setForgotPasswordError("");
                      }
                    }}
                    name="email-forgot-password"
                    type="email"
                    id="email-forgot-password"
                    className={`${
                      forgotPasswordError.length > 0 ? "border-red-500" : ""
                    } bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5`}
                    placeholder={t_global("yourEmail")}
                  />
                  <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
                </div>

                {forgotPasswordError.length > 0 && (
                  <p className="text-red-500 text-sm text-left italic mt-2">{forgotPasswordError}</p>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="relative rock:mb-6 mb-3 form-group">
                <div>
                  <div className="absolute inset-y-0 left-0 max-h-10 flex items-center pl-3.5 pointer-events-none">
                    <MailOutlined />
                  </div>
                  <input
                    onInput={handleChangeLoginForm}
                    name="email"
                    type="email"
                    id="email-login"
                    className={`${
                      loginErrors.email ? "border-red-500" : ""
                    } bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5`}
                    placeholder={t_global("yourEmail")}
                  />
                  <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
                </div>

                {loginErrors.email && <p className="text-red-500 text-sm text-left italic mt-2">{loginErrors.email}</p>}
              </div>
              <div className="relative rock:mb-6 mb-3 form-group">
                <div className="absolute inset-y-0 left-0 max-h-10 flex items-center pl-3.5 pointer-events-none">
                  <LockOutlined />
                </div>
                <input
                  onInput={handleChangeLoginForm}
                  name="password"
                  type="password"
                  id="password-login"
                  className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  placeholder={t_global("enterPassword")}
                />
                <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
                <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
                {loginErrors.password && (
                  <p className="text-red-500 text-sm text-left italic mt-2">{loginErrors.password}</p>
                )}
              </div>
            </>
          )}

          <button
            onClick={() => handleLogin(loginData.email, loginData.password)}
            disabled={hasLoginErrors || forgotPasswordError.length > 0 ? true : false}
            className={`w-full p-2.5 border rounded-lg text-sm ${
              hasLoginErrors
                ? ""
                : "rock:hover:bg-[var(--blue)] rock:hover:text-white rock:duration-75 rock:delay-75 rock:ease-in-out"
            }`}
          >
            {isForgotPasswordForm ? t_global("resetMyPassword") : t_global("login")}
          </button>

          <p
            onClick={() => setIsForgotPasswordForm(!isForgotPasswordForm)}
            className="text-sm w-fit cursor-pointer rock:hover:text-[var(--blue-text)] text-left mt-2"
          >
            {isForgotPasswordForm ? t_global("login") : t_global("forgotPassword")}
          </p>
        </div>

        <div className="w-full" id="reg-form">
          <h2 className="text-center rock:text-lg text-base uppercase mb-3">{t_global("signUp")}</h2>

          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 max-h-10 flex items-center pl-3.5 pointer-events-none">
              <UserOutlined />
            </div>
            <input
              onInput={handleChangeSignupForm}
              name="fullname"
              type="text"
              id="fullname-reg"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder={t_global("fullname")}
            />
            <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
            {signupErrors.fullname && (
              <p className="text-red-500 text-sm text-left italic mt-2">{signupErrors.fullname}</p>
            )}
          </div>
          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 max-h-10 flex items-center pl-3.5 pointer-events-none">
              <MailOutlined />
            </div>
            <input
              onInput={handleChangeSignupForm}
              name="email"
              type="email"
              id="email-reg"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="Email"
            />
            <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
            {signupErrors.email && <p className="text-red-500 text-sm text-left italic mt-2">{signupErrors.email}</p>}
          </div>
          <div className="relative rock:mb-6 mb-3 form-group">
            <div className="absolute inset-y-0 left-0 max-h-10 flex items-center pl-3.5 pointer-events-none">
              <LockOutlined />
            </div>
            <input
              onInput={handleChangeSignupForm}
              name="password"
              type="password"
              id="password-reg"
              className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder={t_global("password")}
            />
            <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
            {signupErrors.password && (
              <p className="text-red-500 text-sm text-left italic mt-2">{signupErrors.password}</p>
            )}
          </div>

          <button
            onClick={() => handleSignUp(signUpData.fullname, signUpData.email, signUpData.password)}
            disabled={hasSignupErrors ? true : false}
            className={`w-full p-2.5 border rounded-lg text-sm ${
              hasSignupErrors
                ? ""
                : "rock:hover:bg-[var(--blue)] rock:hover:text-white rock:duration-75 rock:delay-75 rock:ease-in-out"
            }`}
          >
            {t_global("register")}
          </button>
        </div>
      </section>
    </div>
  );
}
