import { Matches } from "../../../database/models";
import { UniqueCalendar } from "../../interfaces";

export function convert(input: Matches[]): UniqueCalendar {
  const uniqueDates = input.reduce((acc, curr) => {
    acc.push(curr.getDataValue("uniqueDate"));
    return acc;
  }, [] as Date[]);
  return { uniqueDates };
}
