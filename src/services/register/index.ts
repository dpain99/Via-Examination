import axiosInstance from "../interceptors";
import { IBodyNewUser } from "./modal";

const registerUser = async (body: IBodyNewUser) => {
  try {
    const response = await axiosInstance.post("ExamUser/register-user", body);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { registerUser };
