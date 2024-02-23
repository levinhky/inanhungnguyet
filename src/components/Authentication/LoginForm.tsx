import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { ChangeEvent } from "react";

type Props = {
  handleChangeLoginForm: (e: ChangeEvent<HTMLInputElement>) => void;
  loginErrors: LoginFields;
};

const LoginForm = (props: Props) => {
  const { handleChangeLoginForm, loginErrors } = props;

  return (
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
            placeholder={"Email của bạn"}
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
          placeholder={"Nhập mật khẩu"}
        />
        <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
        <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
        {loginErrors.password && <p className="text-red-500 text-sm text-left italic mt-2">{loginErrors.password}</p>}
      </div>
    </>
  );
};

export default LoginForm;
