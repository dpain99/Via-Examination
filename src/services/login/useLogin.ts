/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from "react-query";
import { ILoginCallback } from "./modal";
import { authLogin } from "./index";

export const uselogin = ({ onError, onSuccess }: ILoginCallback) => {
  return {
    ...useMutation(authLogin, {
      onSuccess: (data) => {
        if (!data) return;
        onSuccess();
      },
      onError,
    }),
  };
};
