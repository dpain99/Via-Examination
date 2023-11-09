export interface IDataListProvince {
  idProvince: string;
  name: string;
}

export interface IDataListDistrict {
  idDistrict: string;
  name: string;
}

export interface IDataListWard {
  idDistrict: string;
  idCommune: string;
  name: string;
}

export type ILoginCallback = {
  onSuccess: VoidFunction;
  onError: VoidFunction;
};

export interface IParamDistrict {
  idProvince: string;
}

export interface IParamWard {
  idDistrict: string;
}
