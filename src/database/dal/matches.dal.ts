import { Op, fn, col } from "sequelize";
import {
  FilterCalendarDTO,
  FilterFixturesDTO
} from "../../api/dto/matches.dto";
import { Matches, Teams, Tournaments } from "../models";

export function findAllWithAssoc(
  filter: FilterFixturesDTO
): Promise<Matches[]> {
  const whereClause = {};
  if (filter.lastMatchDate) {
    Object.assign(whereClause, {
      matchDate: { [Op.gte]: filter.lastMatchDate }
    });
  }
  if (filter.lastMatchId) {
    Object.assign(whereClause, { id: { [Op.ne]: filter.lastMatchId } });
  }

  return Matches.findAll({
    where: whereClause,
    offset: filter.offset ?? 0,
    limit: filter.limit ?? 5,
    order: [["matchDate", "ASC"]],
    include: [
      {
        model: Teams,
        as: "homeTeam"
      },
      {
        model: Teams,
        as: "awayTeam"
      },
      {
        model: Tournaments
      }
    ]
  });
}

export function findAllDistinctDates(
  filter: FilterCalendarDTO
): Promise<Matches[]> {
  const whereClause = { matchDate: { [Op.gte]: filter.start } };
  if (filter.end) {
    Object.assign(whereClause, { matchDate: { [Op.lte]: filter.end } });
  }

  return Matches.findAll({
    where: whereClause,
    attributes: [
      [
        fn(
          "DISTINCT",
          fn("DATE", fn("DATE_FORMAT", col("matchDate"), "%Y-%m-%d"))
        ),
        "uniqueDate"
      ]
    ]
  });
}
