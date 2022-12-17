import * as service from "../../../database/services/matches.service";
import { FilterFixturesDTO } from "../../dto/matches.dto";
import { Matches } from "../../interfaces";
import { convert } from "./mapper";

export const getAll = async (filter: FilterFixturesDTO): Promise<Matches[]> => {
  const matchArray = await service.findAll(filter);
  return convert(matchArray);
};
