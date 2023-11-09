import React from "react";
import "./style.css";
import { Controller, useFormContext } from "react-hook-form";

interface ICheckBoxBaseProps {
  label?: string;
  name: string;
}
const CheckBoxBase = ({ label, name }: ICheckBoxBaseProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="wrapper">
          <label className="container">
            {label}
            <input
              type="checkbox"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
            <span
              className={`checkmark ${error?.message ? "error" : ""}`}
            ></span>
          </label>
        </div>
      )}
    />
  );
};

export default CheckBoxBase;
