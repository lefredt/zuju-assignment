import * as service from "../../../database/services/matches.service";
import { FilterCalendarDTO } from "../../dto/matches.dto";
import { UniqueCalendar } from "../../interfaces";
import { convert } from "./mapper";

export const getAllDistDates = async (
  filter: FilterCalendarDTO
): Promise<UniqueCalendar> => {
  const uniqueDatesArray = await service.findAllDistDates(filter);
  return convert(uniqueDatesArray);
};
