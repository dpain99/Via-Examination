import { FormProvider, useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import ButtonBase from "../../../../../components/ButtonBase";
import InputBase from "../../../../../components/InputBase";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IContentModalChangePasswordProps {
  onClickClose: () => void;
  onSubmitEnd: any;
}

const ContentModalChangePassword = ({
  onClickClose,
  onSubmitEnd,
}: IContentModalChangePasswordProps) => {
  const schema = Yup.object().shape({
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
  });

  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

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
            <span className="heading-6-bold">Yêu cầu thay đổi mật khẩu</span>
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
            <InputBase label="Email/ Số điện thoại" name="userName" />
            <p
              className="p2-regular"
              style={{ textAlign: "center", width: "100%" }}
            >
              Bạn vui lòng kiểm tra hòm thư đến hoặc mục tin nhắn trên điện
              thoại để lấy mã OTP
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <ButtonBase label="Thay đổi mật khẩu" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ContentModalChangePassword;
