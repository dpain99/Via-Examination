/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "react-query";
import { registerUser } from "./index";
import { ILoginCallback } from "../login/modal";

export const useRegisterUser = ({ onError, onSuccess }: ILoginCallback) => {
  return {
    ...useMutation(registerUser, {
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
