import { FormProvider, useForm } from "react-hook-form";
import InputBase from "../../components/InputBase";
import Footer from "../../components/Layout/Footer";
import PauseOnHover from "../Auth/components/Carousel";
import ServiceForm from "../Auth/components/ServiceForm";
import "./style.css";
import ButtonBase from "../../components/ButtonBase";
import { useNavigate, useParams } from "react-router-dom";
import { PATH_AUTH } from "../../routes/path";

const Home = () => {
  const methods = useForm({});
  const navigate = useNavigate();
  const { name } = useParams();

  return (
    <FormProvider {...methods}>
      <form>
        <div className="auth-container">
          <img
            src={require("../../assets/images/Header.png")}
            alt="header"
            className="auth-header-img"
          />
          <div className="auth-login-form-1">
            <span
              className="p2-regular"
              style={{ color: "white", margin: "0 10px" }}
            >
              TÌM KIẾM NỘI DUNG
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "4px",
                gap: "30px",
                alignItems: "end",
                marginTop: "16px",
              }}
            >
              <InputBase
                name={"search"}
                label="Nhập thông tin cần tìm"
                placeHolder="Tìm kiếm số điện thoại hoặc email... "
              />
              <ButtonBase
                label="Tìm"
                style={{ marginBottom: "22px", width: "70px" }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              right: "70px",
              top: "100px",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="p2-regular" style={{ color: "white" }}>
              Xin chào bạn
            </span>
            <span
              className="p2-regular"
              style={{ color: "white", textTransform: "uppercase" }}
            >
              {name}
            </span>
            <img
              src={require("../../assets/images/Facebook.png")}
              alt="header"
              style={{ width: "50xp", height: "50px", objectFit: "contain" }}
            />
            <ButtonBase
              label="Thoát"
              onClick={() => navigate(PATH_AUTH.login_logout)}
            />
          </div>

          <div className="layout-auth">
            <div className="layout-1">
              <span className="heading-4">Bạn đã đăng nhập thành công</span>
              <span className="p2-regular" style={{ margin: "10px" }}>
                Chào mừng {name} đã quay trở lại hệ thống
              </span>
            </div>

            <div className="layout-2">
              <ServiceForm />
            </div>
          </div>

          <div className="sub-footer">
            <span className="h4-semi-bold">KHÁCH HÀNG TIÊU BIỂU</span>
            <PauseOnHover />
          </div>

          <Footer />
        </div>
      </form>
    </FormProvider>
  );
};
export default Home;
