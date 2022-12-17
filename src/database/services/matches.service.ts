import {
  FilterCalendarDTO,
  FilterFixturesDTO
} from "../../api/dto/matches.dto";
import * as MatchesDAL from "../dal/matches.dal";

export const findAll = async (filter: FilterFixturesDTO) => {
  return MatchesDAL.findAllWithAssoc(filter);
};

export const findAllDistDates = async (filter: FilterCalendarDTO) => {
  return MatchesDAL.findAllDistinctDates(filter);
};
