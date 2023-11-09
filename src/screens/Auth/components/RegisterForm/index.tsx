import React, { useState } from "react";
import InputBase from "../../../../components/InputBase";
import "./style.css";
import SelectBase from "../../../../components/SelectBase";
import CheckBoxBase from "../../../../components/CheckBoxBase";
import ButtonBase from "../../../../components/ButtonBase";
import ModalBase from "../../../../components/ModalBase";
import { FormProvider, useForm } from "react-hook-form";
import {
  useGetDistrict,
  useGetProvince,
  useGetWard,
} from "../../../../services/location/useGetLocation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IBodyNewUser } from "../../../../services/register/modal";
import ContentModalSuccess from "./ContentModalSuccess";
import { useRegisterUser } from "../../../../services/register/useRegisterUser";
import ContentModalError from "./ContentModalError";

const RegisterForm = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalSuccessShow, setModalSuccessShow] = useState<boolean>(false);
  const [modalErrorShow, setModalErrorShow] = useState<boolean>(false);

  const ContentModal = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <img
          src={require("../../../../assets/images/icon_modal.png")}
          alt="icons"
          style={{ width: "48px" }}
        />
        <span
          className="h4-semi-bold"
          style={{ color: "var(--success-color-500)" }}
        >
          Chính sách đang được cập nhật
        </span>
        <span className="p2-regular">Cảm ơn bạn đã sử dụng dịch vụ</span>
        <span
          className="p2-regular"
          style={{ color: "var(--warning-color-500)" }}
        >
          Vui lòng kiểm tra lại sau
        </span>
      </div>
    );
  };

  const registerSchema = Yup.object().shape({
    shopName: Yup.string().required("Vui lòng không để trống tên cửa hàng"),
    phoneNumber: Yup.string()
      .required("Vui lòng không để trống số điện thoại")
      .matches(
        /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
        "Số điện thoại không đúng định dạng"
      ),
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
    email: Yup.string().matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Email không đúng định dạng"
    ),
    acceptTerm: Yup.bool().oneOf([true], "Field must be checked"),
  });

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      acceptTerm: false,
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // get data province
  const { data: listProvince, isLoading } = useGetProvince();
  const dataProvince = listProvince?.map((item) => item.name) || [];

  const [province, setProvince] = useState<string>(dataProvince[0]);
  const idProvince =
    listProvince?.filter((item) => item.name === province) || [];

  // get data district
  const { data: listDistrict } = useGetDistrict({
    idProvince: idProvince[0]?.idProvince || "01",
  });

  const dataDistrict = listDistrict?.map((item) => item.name) || [];

  const [district, setDistrict] = useState<string>(dataDistrict[0]);
  const idDistrict =
    listDistrict?.filter((item) => item.name === district) || [];

  // get data ward
  const { data: listWard } = useGetWard({
    idDistrict: idDistrict[0]?.idDistrict || "01",
  });

  const dataWard = listWard?.map((item) => item.name) || [];

  const [ward, setWard] = useState<string>(dataWard[0]);

  const onSuccess = () => {
    setModalSuccessShow(true);
  };

  const onError = () => {
    setModalErrorShow(true);
  };

  const { mutate, data: dataRes } = useRegisterUser({ onSuccess, onError });

  const onSubmit = (data: any) => {
    const convertData: IBodyNewUser = {
      userName: data.phoneNumber,
      shopName: data.shopName,
      phoneNumber: data.phoneNumber,
      password: data.password,
      confirmPassword: data.confirmPassword,
      email: data.email,
      address: data.address,
      wards: ward,
      district: district,
      province: province,
      acceptTerm: data.acceptTerm,
    };
    mutate(convertData);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register-form-container">
          <ModalBase
            show={modalShow}
            setShow={setModalShow}
            children={<ContentModal />}
          />

          <ModalBase
            show={modalSuccessShow}
            setShow={setModalSuccessShow}
            children={
              <ContentModalSuccess onClose={() => setModalSuccessShow(false)} />
            }
          />

          <ModalBase
            show={modalErrorShow}
            setShow={setModalErrorShow}
            children={
              <ContentModalError
                onClickSkip={() => setModalErrorShow(false)}
                onClickTryAgain={() => setModalErrorShow(false)}
                errorDetail={dataRes?.data.error}
              />
            }
          />
          <span className="heading-4">ĐĂNG KÝ TÀI KHOẢN</span>

          <div className="row-1">
            <InputBase
              label="Tên cửa hàng"
              placeHolder="Nhập tên cửa hàng"
              name="shopName"
              require
            />
            <InputBase
              label="Số điện thoại"
              placeHolder="Nhập số điện thoại"
              name="phoneNumber"
              require
            />
            <InputBase label="Email" placeHolder="Nhập email" name="email" />
          </div>

          <div className="row-1">
            <InputBase
              label="Mật khẩu"
              placeHolder="Nhập mật khẩu..."
              type="password"
              name="password"
              require
            />
            <InputBase
              label="Xác nhận mật khẩu"
              placeHolder="Xác nhận mật khẩu"
              type="password"
              name="confirmPassword"
              require
            />
          </div>

          <div className="row-1">
            <InputBase
              label="Địa chỉ"
              placeHolder="Nhập số nhà, tòa nhà, tên đường..."
              name="address"
            />
          </div>

          <div className="row-1">
            <SelectBase
              data={dataWard}
              currentData={ward}
              setData={setWard}
              label="Phường / Xã"
              placeHolder="Chọn Phường / Xã"
            />
            <SelectBase
              data={dataDistrict}
              currentData={district}
              setData={setDistrict}
              label="Quận / Huyện"
              placeHolder="Chọn Quận / Huyện"
            />
            <SelectBase
              data={dataProvince}
              currentData={province}
              setData={setProvince}
              label="Thành phố"
              placeHolder="Chọn Thành phố"
            />
          </div>

          <div className="row-2">
            <div className="sub-row">
              <CheckBoxBase name={"acceptTerm"} />
              <span>
                Tôi đã đọc và đồng ý với{" "}
                <span className="sub-link" onClick={() => setModalShow(true)}>
                  Chính sách bảo mật thông tin
                </span>{" "}
              </span>
            </div>
            <ButtonBase label="Đăng ký ngay" type="submit" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
