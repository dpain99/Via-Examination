import React from "react";
import "./style.css";

interface IModalBaseProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}
export default function ModalBase({
  show,
  setShow,
  children,
}: IModalBaseProps) {
  const toggleModal = () => {
    setShow(!show);
  };

  if (show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {show && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">{children}</div>
        </div>
      )}
    </>
  );
}
