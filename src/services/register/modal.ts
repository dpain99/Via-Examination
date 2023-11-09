export interface IBodyNewUser {
  userName: string;
  shopName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  email: string;
  address: string;
  wards: string;
  district: string;
  province: string;
  acceptTerm: boolean;
}
export interface IBodyLogin {
  userName: string;
  password: string;
}
