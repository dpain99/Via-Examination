export interface IParamsGetOTPChangePassword {
  userName: string;
}

export interface IParamsValidateOTPChangePassword {
  userName: string;
  otpCode: string;
}

export interface IBodyChangePassword {
  userName: string;
  otpCode: string;
  password: string;
  confirmPassword: string;
}
