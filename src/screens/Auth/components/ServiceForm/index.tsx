import React from "react";
import "./style.css";

const ServiceForm = () => {
  const ServiceItems = ({
    logo,
    label,
    style,
  }: {
    logo: React.ReactNode;
    label: string;
    style?: React.CSSProperties;
  }) => {
    return (
      <div className="service-items" style={style}>
        {logo}
        <span className="p2-semi-bold" style={{ color: "black" }}>
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className="service-form-container">
      <span className="heading-6-bold">DỊCH VỤ CỦA CHÚNG TÔI</span>

      <div className="service-row-1">
        <ServiceItems
          logo={
            <img
              src={require("../../../../assets/images/logo-express.png")}
              alt="logo-express"
              style={{ width: "36.68px", height: "40px" }}
            />
          }
          label="VIA EXPRESS"
        />

        <ServiceItems
          logo={
            <img
              src={require("../../../../assets/images/logo-fast.png")}
              alt="logo-fast"
              style={{ width: "40.14px", height: "40px" }}
            />
          }
          label="VIA FAST"
        />
      </div>
      <div className="service-row-1">
        <ServiceItems
          logo={
            <img
              src={require("../../../../assets/images/logo-super.png")}
              alt="logo-super"
              style={{ width: "57.83px", height: "40px" }}
            />
          }
          label="VIA SUPER"
        />

        <ServiceItems
          logo={
            <img
              src={require("../../../../assets/images/logo-fresh.png")}
              alt="logo-fresh"
              style={{ width: "56.05px", height: "40px" }}
            />
          }
          label="VIA FRESH"
        />
      </div>
      <div className="service-row-1">
        <ServiceItems
          style={{ width: "100%" }}
          logo={
            <img
              src={require("../../../../assets/images/logo-international.png")}
              alt="logo-international"
              style={{ width: "45.15px", height: "45px" }}
            />
          }
          label="VIA INTERNATIONAL"
        />
      </div>
    </div>
  );
};

export default ServiceForm;
