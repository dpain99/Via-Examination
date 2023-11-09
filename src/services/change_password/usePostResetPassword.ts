/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "react-query";
import { ILoginCallback } from "../login/modal";
import { resetPassword } from "./index";

export const usePostResetPassword = ({
  onError,
  onSuccess,
}: ILoginCallback) => {
  return {
    ...useMutation(resetPassword, {
      onSuccess: (data) => {
        if (!data.data.success) {
          onError(data.data.error);
          return data.data.error;
        }

        if (!data) return;
        onSuccess();
      },
      onError,
    }),
  };
};
