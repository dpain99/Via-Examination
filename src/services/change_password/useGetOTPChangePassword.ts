import { useQuery } from "react-query";
import { IParamsGetOTPChangePassword } from "./modal";
import { getOTPChangePassword } from "./index";

export function useGetOTPChangePassword(param: IParamsGetOTPChangePassword) {
  return {
    ...useQuery(["get_otp_change_password", param], () =>
      getOTPChangePassword(param)
    ),
  };
}
