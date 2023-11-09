import ButtonBase from "../../../../../components/ButtonBase";

interface IContentModalSuccess {
  onClose: any;
}
const ContentModalSuccess = ({ onClose }: IContentModalSuccess) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 50px",
        width: "20vw",
      }}
    >
      <img
        src={require("../../../../../assets/images/icon_modal.png")}
        alt="icons"
        style={{ width: "48px" }}
      />
      <span
        className="h4-semi-bold"
        style={{ color: "var(--success-color-500)" }}
      >
        ĐĂNG KÝ THÀNH CÔNG
      </span>
      <span className="p2-regular" style={{ textAlign: "center" }}>
        Để sử dụng dịch vụ thu hộ, <br /> bạn có muốn Ký kết hợp đồng điện tử
        ngay ?{" "}
      </span>

      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        <ButtonBase
          label="Đăng nhập"
          style={{
            backgroundColor: "var(--neutral-color-100)",
          }}
          styleLabel={{ color: "var(--neutral-color-700)" }}
          onClick={onClose}
        />
        <ButtonBase
          label="Ký kết hợp đồng"
          style={{ backgroundColor: "var(--success-color-500)" }}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ContentModalSuccess;
