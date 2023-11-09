import { PiCaretLeftBold } from "react-icons/pi";
import ButtonBase from "../../../../../components/ButtonBase";

interface ContentModalErrorProp {
  onClickSkip: VoidFunction;
  onClickTryAgain: VoidFunction;
  errorDetail?: string;
}
const ContentModalError = ({
  onClickSkip,
  onClickTryAgain,
  errorDetail,
}: ContentModalErrorProp) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 40px",
      }}
    >
      <img
        src={require("../../../../../assets/images/Icons-error.png")}
        alt="icons"
        style={{ width: "48px" }}
      />
      <span
        className="h4-semi-bold"
        style={{ color: "var(--error-color-600)" }}
      >
        ĐĂNG KÝ KHÔNG THÀNH CÔNG
      </span>
      <span className="p2-regular" style={{ textAlign: "center" }}>
        Thông tin bạn đã đăng ký có thể đã trùng với một tài khoản khác trong hệ
        thống
      </span>
      <span className="p2-regular" style={{ textAlign: "center" }}>
        {errorDetail}
      </span>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <ButtonBase
          label="Bỏ qua đăng ký"
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
          onClick={onClickSkip}
        />
        <ButtonBase
          label="Thử lại"
          style={{ backgroundColor: "var(--success-color-500)" }}
          onClick={onClickTryAgain}
        />
      </div>
    </div>
  );
};

export default ContentModalError;
