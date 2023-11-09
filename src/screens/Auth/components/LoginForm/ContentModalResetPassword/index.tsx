import { AiOutlineClose } from "react-icons/ai";
import ButtonBase from "../../../../../components/ButtonBase";
import InputBase from "../../../../../components/InputBase";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IContentModalResetPasswordProps {
  onClickClose: () => void;
  onSubmitEnd: any;
}

const ContentModalResetPassword = ({
  onClickClose,
  onSubmitEnd,
}: IContentModalResetPasswordProps) => {
  const schema = Yup.object().shape({
    password: Yup.string()
      .min(9, "Mật khẩu phải có ít nhất 9 ký tự")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{9,}$/,
        "Phải có ít nhất 1 chữ số, 1 chữ viết hoa, 1 chữ viết thường và 1 ký tự đặc biệt"
      )
      .required("Vui lòng không để trống mật khẩu"),
    confirmPassword: Yup.string()
      .required("Vui lòng xác nhận lại mật khẩu")
      .oneOf(
        [Yup.ref("password")],
        "Mật khẩu và xác nhận mật khẩu phải giống nhau"
      ),
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    onSubmitEnd(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            width: "30vw",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--neutral-color-50)",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 16px",
              boxSizing: "border-box",
              borderRadius: "4px",
            }}
          >
            <span className="heading-6-bold">THIẾT LẬP MẬT KHẨU MỚI</span>
            <span style={{ cursor: "pointer" }} onClick={onClickClose}>
              <AiOutlineClose />
            </span>
          </div>

          <div
            style={{
              padding: "20px 40px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <InputBase label="Mật khẩu mới" name="password" type="password" />
            <InputBase
              label="Xác nhận mật khẩu mới"
              name="confirmPassword"
              type="password"
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <ButtonBase label="Đăng nhập" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContentModalResetPassword;
