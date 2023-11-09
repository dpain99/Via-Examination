import { useQuery } from "react-query";
import { listDistrict, listProvince, listWard } from "./index";
import { IParamDistrict, IParamWard } from "./modal";

export function useGetProvince() {
  return {
    ...useQuery(["get_province"], () => listProvince()),
  };
}
export function useGetDistrict(param: IParamDistrict) {
  return {
    ...useQuery(["get_district", param], () => listDistrict(param)),
  };
}
export function useGetWard(param: IParamWard) {
  return {
    ...useQuery(["get_ward", param], () => listWard(param)),
  };
}
