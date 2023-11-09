import axiosInstance from "../interceptors";
import {
  IBodyChangePassword,
  IParamsGetOTPChangePassword,
  IParamsValidateOTPChangePassword,
} from "./modal";

export const getOTPChangePassword = async (
  params: IParamsGetOTPChangePassword
) => {
  try {
    const response = await axiosInstance.get(
      "ExamUser/get-otp-change-password",
      { params }
    );
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const getValidateOTPChangePassword = async (
  params: IParamsValidateOTPChangePassword
) => {
  try {
    const response = await axiosInstance.get(
      "ExamUser/validate-otp-change-password",
      { params }
    );
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export const resetPassword = async (body: IBodyChangePassword) => {
  try {
    const response = await axiosInstance.post("ExamUser/change-password", body);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
