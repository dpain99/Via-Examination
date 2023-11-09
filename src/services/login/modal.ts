export interface IBodyLogin {
  userName: string;
  password: string;
}
export type ILoginCallback = {
  onSuccess: VoidFunction;
  onError: (message: string) => void;
};
