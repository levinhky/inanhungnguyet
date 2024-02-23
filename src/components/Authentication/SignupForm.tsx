import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { ChangeEvent } from "react";

type Props = {
  handleChangeSignupForm: (event: ChangeEvent<HTMLInputElement>) => void;
  signupErrors: SignupFields;
  hasSignupError: boolean;
  handleSignUp: (name: string, email: string, password: string) => void;
  signUpData: SignupFields;
};

const SignupForm = (props: Props) => {
  const { handleChangeSignupForm, signupErrors, hasSignupError, handleSignUp, signUpData } = props;
  return (
    <div className="w-full" id="reg-form">
      <h2 className="text-center rock:text-lg text-base uppercase mb-3">Đăng Ký</h2>

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
          placeholder={"Họ và tên"}
        />
        <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
        {signupErrors.fullname && <p className="text-red-500 text-sm text-left italic mt-2">{signupErrors.fullname}</p>}
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
          placeholder={"Mật khẩu"}
        />
        <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
        {signupErrors.password && <p className="text-red-500 text-sm text-left italic mt-2">{signupErrors.password}</p>}
      </div>

      <button
        onClick={() => handleSignUp(signUpData.fullname, signUpData.email, signUpData.password)}
        disabled={hasSignupError ? true : false}
        className={`w-full p-2.5 border rounded-lg text-sm ${
          hasSignupError
            ? ""
            : "rock:hover:bg-[var(--blue)] rock:hover:text-white rock:duration-75 rock:delay-75 rock:ease-in-out"
        }`}
      >
        Đăng ký
      </button>
    </div>
  );
};

export default SignupForm;
