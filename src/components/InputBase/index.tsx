import React, { useState } from "react";
import "./style.css";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { Controller, useFormContext } from "react-hook-form";

interface InputBaseProps {
  label?: string;
  errorMessage?: string;
  placeHolder?: string;
  type?: string;
  name: string;
  require?: boolean;
}

const InputBase = ({
  label,
  errorMessage,
  placeHolder,
  type,
  name,
  require,
}: InputBaseProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { control } = useFormContext();

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="input-base-container">
          <span className="label-input">
            {label} <span className="star-required">{require ? "*" : ""}</span>
          </span>
          <div className="input-wrapper">
            <input
              className={error ? "input-base error" : "input-base"}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              placeholder={placeHolder}
              type={isPasswordVisible && type === "password" ? "text" : type}
            />
            {type === "password" && (
              <div
                className="password-toggle"
                onClick={handleTogglePasswordVisibility}
              >
                {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
              </div>
            )}
          </div>
          <span className="error-message">
            {error ? error.message : errorMessage}
          </span>
        </div>
      )}
    />
  );
};

export default InputBase;
