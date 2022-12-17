import { Matches } from "../../../database/models";
import { Matches as MatchOutput } from "../../interfaces";

export function convert(input: Matches[]): MatchOutput[] {
  return input.map((match) => {
    return {
      id: match.id!,
      tournamentName: match.tournament!.name,
      matchDate: match.matchDate,
      homeTeam: match.homeTeam!.name,
      awayTeam: match.awayTeam!.name,
      homeTeamScore: match.homeTeamScore,
      awayTeamScore: match.awayTeamScore
    };
  });
}
