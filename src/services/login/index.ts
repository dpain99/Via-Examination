import axiosInstance from "../interceptors";
import { IBodyLogin } from "./modal";

const authLogin = async (body: IBodyLogin) => {
  try {
    const response = await axiosInstance.post("ExamUser/login", body);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { authLogin };
