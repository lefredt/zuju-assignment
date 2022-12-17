export interface Matches {
  id: number;
  tournamentName: string;
  matchDate: Date;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore?: number;
  awayTeamScore?: number;
}
