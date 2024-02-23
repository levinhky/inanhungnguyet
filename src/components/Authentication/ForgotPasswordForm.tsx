import { MailOutlined } from "@ant-design/icons";
import { ChangeEvent } from "react";

type Props = {
  setForgotPasswordValue: (value: string) => void;
  setForgotPasswordError: (value: string) => void;
  forgotPasswordError: string;
};

const ForgotPasswordForm = (props: Props) => {
  const { setForgotPasswordValue, setForgotPasswordError, forgotPasswordError } = props;
  return (
    <>
      <p className="text-[#333] text-left rock:mb-6 mb-3 text-sm">
        Vui lòng nhập địa chỉ email của bạn dưới đây để nhận được một liên kết đặt lại mật khẩu.
      </p>
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
                setForgotPasswordError("Email không hợp lệ!");
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
            placeholder={"Email của bạn"}
          />
          <span className="absolute right-0 top-1/4 text-red-600 text-3xl mr-4 before:content-['*']"></span>
        </div>
        {forgotPasswordError.length > 0 && (
          <p className="text-red-500 text-sm text-left italic mt-2">{forgotPasswordError}</p>
        )}
      </div>
    </>
  );
};

export default ForgotPasswordForm;
