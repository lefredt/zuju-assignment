import { Model, Table, Column, AllowNull, HasMany } from "sequelize-typescript";
import { Matches } from "./matches.model";

@Table({ tableName: "teams" })
export class Teams extends Model {
  @AllowNull(false)
  @Column
  name!: string;

  @HasMany(() => Matches, "homeTeamId")
  homeTeams: Teams[];

  @HasMany(() => Matches, "awayTeamId")
  awayTeams: Teams[];
}
