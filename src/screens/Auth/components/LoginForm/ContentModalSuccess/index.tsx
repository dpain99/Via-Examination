import Countdown from "react-countdown";
import { useNavigate } from "react-router-dom";
import { PATH_HOME } from "../../../../../routes/path";
import { replacePathParams } from "../../../../../utils/replacePathParams";

interface IContentModalSuccessProps {
  name: string;
}
const ContentModalSuccess = ({ name }: IContentModalSuccessProps) => {
  const Completionist = () => <span>Đang chuyển hướng</span>;
  const navigate = useNavigate();
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
      navigate(replacePathParams(PATH_HOME.home, { name: name }));
      return <Completionist />;
    } else {
      return (
        <span
          className="p3-regular"
          style={{ color: "var(--primary-color-600)" }}
        >
          Tự đồng đăng nhập sau {seconds} giây
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
        padding: "20px 50px",
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
        MẬT KHẨU ĐÃ ĐƯỢC THIẾT LẬP LẠI
      </span>
      <span className="p2-regular" style={{ textAlign: "center" }}>
        Bạn vui lòng ghi nhớ mật khẩu nhé!
      </span>

      <span
        className="p2-regular"
        style={{ textAlign: "center", color: "var(--primary-color-600)" }}
      >
        <Countdown date={Date.now() + 5000} renderer={renderer} />
      </span>
    </div>
  );
};

export default ContentModalSuccess;
