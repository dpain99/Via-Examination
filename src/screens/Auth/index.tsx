import React from "react";
import Footer from "../../components/Layout/Footer";
import PauseOnHover from "./components/Carousel";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ServiceForm from "./components/ServiceForm";
import "./style.css";

const Auth = () => {
  return (
    <div className="auth-container">
      <img
        src={require("../../assets/images/Header.png")}
        alt="header"
        className="auth-header-img"
      />
      <div className="auth-login-form">
        <LoginForm />
      </div>

      <div className="layout-auth">
        <div className="layout-1">
          <RegisterForm />
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
  );
};

export default Auth;
