import React, { useState } from "react";
import InputBase from "../../../../components/InputBase";
import "./style.css";
import ButtonBase from "../../../../components/ButtonBase";
import { FormProvider, useForm } from "react-hook-form";
import { IBodyLogin } from "../../../../services/login/modal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { uselogin } from "../../../../services/login/useLogin";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../../../../routes/path";
import ModalBase from "../../../../components/ModalBase";
import ContentModalChangePassword from "./ContentModalChangePassword";
import {
  getOTPChangePassword,
  getValidateOTPChangePassword,
  resetPassword,
} from "../../../../services/change_password";
import ContentModalGetOtp from "./ContentModalGetOTP";
import { IBodyChangePassword } from "../../../../services/change_password/modal";
import ContentModalResetPassword from "./ContentModalResetPassword";
import ContentModalSuccess from "./ContentModalSuccess";
import { replacePathParams } from "../../../../utils/replacePathParams";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showModalForgotPassword, setShowModalForgotPassword] =
    useState<boolean>(false);

  const [showModalOtp, setShowModalOtp] = useState<boolean>(false);
  const [showModalChangePassword, setShowModalChangePassword] =
    useState<boolean>(false);

  const [showModalChangeSuccess, setShowModalChangeSuccess] =
    useState<boolean>(false);

  const LoginSchema = Yup.object().shape({
    userName: Yup.string()
      .required("Vui lòng không bỏ trống trường này")
      .test(
        "is-phone-or-email",
        "Số điện thoại hoặc email không hợp lệ",
        (value) => {
          const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
          const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          return phoneRegex.test(value) || emailRegex.test(value);
        }
      ),
    password: Yup.string().required("Vui lòng không bỏ trống mật khẩu"),
  });

  const methods = useForm<IBodyLogin>({
    resolver: yupResolver(LoginSchema),
  });
  const { handleSubmit, watch } = methods;

  const onSuccess = () => {
    navigate(replacePathParams(PATH_HOME.home, { name: watch("userName") }));
  };

  const onError = () => {};

  const { mutate } = uselogin({ onSuccess, onError });

  const onSubmit = (data: IBodyLogin) => {
    mutate({ userName: data.userName, password: data.password });
  };

  // get OTP
  const [dataUser, setDataUser] = useState<string>("");

  const useHandleClickSend = async (data: any) => {
    setDataUser(data.userName);
    return await getOTPChangePassword({ userName: data.userName })
      .then((data) => {
        if (data.data.success) {
          setShowModalForgotPassword(false);
          setShowModalOtp(true);
        }
      })
      .catch(() => {});
  };

  // validate otp
  const [otp, setOtp] = useState("");
  const [haveError, setHaveError] = useState<boolean>(false);

  const handleClickValidateSendOtp = async () => {
    return await getValidateOTPChangePassword({
      userName: dataUser,
      otpCode: otp,
    })
      .then((data) => {
        if (data.data.content) {
          setShowModalOtp(false);
          setShowModalChangePassword(true);
        } else {
          setHaveError(true);
        }
      })
      .catch(() => {});
  };

  const handleSubmitEnd = async (data: any) => {
    const convertData: IBodyChangePassword = {
      userName: dataUser,
      otpCode: otp,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    return await resetPassword(convertData)
      .then((data) => {
        if (data.data.success) {
          setShowModalChangePassword(false);
          setShowModalChangeSuccess(true);
        }
      })
      .catch(() => {});
  };

  return (
    <FormProvider {...methods}>
      <ModalBase
        setShow={setShowModalForgotPassword}
        show={showModalForgotPassword}
        children={
          <ContentModalChangePassword
            onClickClose={() => setShowModalForgotPassword(false)}
            onSubmitEnd={useHandleClickSend}
          />
        }
      />

      <ModalBase
        setShow={setShowModalOtp}
        show={showModalOtp}
        children={
          <ContentModalGetOtp
            onClickClose={() => setShowModalOtp(false)}
            value={otp}
            onChange={setOtp}
            onClick={handleClickValidateSendOtp}
            onBack={() => {
              setShowModalOtp(false);
              setShowModalForgotPassword(true);
            }}
            haveError={haveError}
          />
        }
      />

      <ModalBase
        setShow={setShowModalChangePassword}
        show={showModalChangePassword}
        children={
          <ContentModalResetPassword
            onClickClose={() => setShowModalChangePassword(false)}
            onSubmitEnd={handleSubmitEnd}
          />
        }
      />

      <ModalBase
        setShow={setShowModalChangeSuccess}
        show={showModalChangeSuccess}
        children={<ContentModalSuccess name={dataUser} />}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span className="label-h2">ĐĂNG NHẬP NGAY!</span>
          <div className="login-card">
            <InputBase
              label="Số điện thoại hoặc email"
              placeHolder="Nhập số điện thoại hoặc email..."
              name="userName"
            />
            <InputBase
              label="Mật khẩu"
              placeHolder="Nhập mật khẩu..."
              type="password"
              name="password"
            />
            <div
              style={{
                display: "flex",
                alignItems: "end",
                marginBottom: "22px",
              }}
            >
              <ButtonBase label="Đăng nhập" type="submit" />
            </div>
          </div>
          <span
            className="p3-regular forgot-password"
            onClick={() => setShowModalForgotPassword(true)}
          >
            Quên mật khẩu
          </span>
        </div>
      </form>
    </FormProvider>
  );
};

export default LoginForm;
