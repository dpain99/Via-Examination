import axios from "axios";
import {
  IDataListDistrict,
  IDataListProvince,
  IDataListWard,
  IParamDistrict,
  IParamWard,
} from "./modal";

export const listProvince = async () => {
  try {
    const data = await axios.get<IDataListProvince[] | undefined>(
      "https://vietnam-administrative-division-json-server-swart.vercel.app/province"
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export const listDistrict = async (param: IParamDistrict) => {
  try {
    const data = await axios.get<IDataListDistrict[] | undefined>(
      `https://vietnam-administrative-division-json-server-swart.vercel.app/district/?idProvince=${param.idProvince}`
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
export const listWard = async (param: IParamWard) => {
  try {
    const data = await axios.get<IDataListWard[] | undefined>(
      `https://vietnam-administrative-division-json-server-swart.vercel.app/commune/?idDistrict=${param.idDistrict}`
    );
    return data.data;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
