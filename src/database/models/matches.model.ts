import {
  AllowNull,
  Model,
  Table,
  Column,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { Teams } from "./teams.models";
import { Tournaments } from "./tournaments.model";

@Table({ tableName: "match_detail" })
export class Matches extends Model {
  @AllowNull(false)
  @Column
  matchDate!: Date;

  @AllowNull(false)
  @ForeignKey(() => Teams)
  @Column
  homeTeamId!: number;
  @BelongsTo(() => Teams, "homeTeamId") homeTeam: Teams | undefined;

  @AllowNull(false)
  @ForeignKey(() => Teams)
  @Column
  awayTeamId!: number;
  @BelongsTo(() => Teams, "awayTeamId") awayTeam: Teams | undefined;

  @AllowNull(false)
  @ForeignKey(() => Tournaments)
  @Column
  tournamentId!: number;
  @BelongsTo(() => Tournaments) tournament: Tournaments | undefined;

  @Column
  homeTeamScore?: number;

  @Column
  awayTeamScore?: number;
}
