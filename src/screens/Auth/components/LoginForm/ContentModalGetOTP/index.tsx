import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import ButtonBase from "../../../../../components/ButtonBase";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import Countdown from "react-countdown";

interface IContentModalGetOtpProps {
  onClickClose: () => void;
  value: string;
  onChange: any;
  onClick: any;
  onBack: any;
  haveError: boolean;
}

const ContentModalGetOtp = ({
  onClickClose,
  value,
  onChange,
  onClick,
  onBack,
  haveError,
}: IContentModalGetOtpProps) => {
  const Completionist = () => <span>Đã hết giờ</span>;
  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: any;
    seconds: any;
    completed: any;
  }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <span
          className="p3-regular"
          style={{ color: "var(--primary-color-600)" }}
        >
          Thời gian còn lại {minutes}:{seconds} phút
        </span>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        width: "34vw",
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
        <span className="heading-6-bold">NHẬP MÃ OTP</span>
        <span style={{ cursor: "pointer" }} onClick={onClickClose}>
          <AiOutlineClose />
        </span>
      </div>

      <div
        style={{
          padding: "20px 70px",
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {!haveError && (
          <span
            className="p2-semi-bold"
            style={{ color: "var(--success-color-500)" }}
          >
            MÃ OTP ĐÃ ĐƯỢC GỬI TỚI SỐ ĐIỆN THOẠI/ EMAIL
          </span>
        )}

        {haveError && (
          <span>
            Mã khôi phục không đúng.{" "}
            <span style={{ color: "#0079ED", cursor: "pointer" }}>
              Gửi lại mã
            </span>
          </span>
        )}
        <Countdown date={Date.now() + 180000} renderer={renderer} />

        <OtpInput
          value={value}
          onChange={onChange}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              className="h4-extra-bold"
              style={{
                width: "65px",
                height: "66px",
                textAlign: "center",
                outlineColor: "var(--primary-color-500)",
                margin: "0 10px",
                border: "1px solid var(--neutral-color-400)",
                borderRadius: "4px",
              }}
            />
          )}
        />

        {!haveError && (
          <span>
            Không nhận được mã OTP.{" "}
            <span style={{ color: "#0079ED", cursor: "pointer" }}>
              Gửi lại mã
            </span>
          </span>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            gap: "30px",
          }}
        >
          <ButtonBase
            label="Trở về"
            onClick={onBack}
            style={{
              backgroundColor: "var(--neutral-color-100)",
            }}
            styleLabel={{ color: "var(--neutral-color-700)" }}
            icon={
              <PiCaretLeftBold
                style={{
                  color: "var(--neutral-color-700)",
                  paddingRight: "10px",
                }}
              />
            }
          />
          <ButtonBase
            label="Thay đổi mật khẩu"
            onClick={onClick}
            disabled={value.length < 6 ? true : false}
            icon={
              <AiOutlineCheck
                style={{
                  paddingRight: "10px",
                }}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ContentModalGetOtp;
