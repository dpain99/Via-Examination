import React from "react";
import "./style.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-row-1">
        <div className="items-1">
          <img
            src={require("../../../assets/images/logo.png")}
            alt="logo"
            style={{ width: "230px" }}
          />
          <span className="footer-cap">
            CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN <br /> ỨNG DỤNG THÔNG MINH VIỆT
          </span>
          <span className="footer-regular">Mã Số Thuế: 0106494214</span>
          <span className="footer-regular">Ngày hoạt động: 27/03/2014</span>
          <span className="footer-regular">
            Sở Kế Hoạch và Đầu Tư Thành Phố Hà Nội
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              gap: "10px",
            }}
          >
            <img
              src={require("../../../assets/images/Facebook.png")}
              alt="fb"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
            <img
              src={require("../../../assets/images/Instagram.png")}
              alt="insta"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
            <img
              src={require("../../../assets/images/tiktok.png")}
              alt="tiktok"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
            <img
              src={require("../../../assets/images/YT.png")}
              alt="yt"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
            <img
              src={require("../../../assets/images/zalo.png")}
              alt="zalo"
              style={{ width: "30px", height: "30px", objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="items-1">
          <span className="footer-cap">Liên hệ</span>
          <span className="footer-regular">
            <HiOutlineMail />
            contact@viajsc.com
          </span>
          <span className="footer-regular">
            <MdOutlineLocalPhone />
            1900 9999
          </span>
          <span className="footer-regular">
            <IoLocationOutline />
            16, Ngõ 204, Trần Duy Hưng, Trung Hòa, Cầu Giấy, HN
          </span>

          <img
            src={require("../../../assets/images/icon-bct.png")}
            alt="icon"
            style={{ width: "91px", height: "34px" }}
          />
        </div>

        <div className="items-1">
          <span className="footer-cap">TẢI ỨNG DỤNG</span>

          <div className="item-2">
            <img
              src={require("../../../assets/images/QR.png")}
              alt="qr"
              style={{ width: "80px", height: "80px" }}
            />
            <div className="sub-item-2">
              <img
                src={require("../../../assets/images/app_store.png")}
                alt="app_store"
                style={{ width: "110px", height: "32.13pxpx" }}
              />
              <img
                src={require("../../../assets/images/ch_play.png")}
                alt="ch_play"
                style={{ width: "110px", height: "32.13pxpx" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span className="footer-cap">Chính sách bảo mật</span>
        <span className="footer-regular">
          Copyright © 2021 VIA JSC. All rights reserved.
        </span>
      </div>
    </div>
  );
};
export default Footer;
