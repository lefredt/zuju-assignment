import { Model, Table, Column, AllowNull } from "sequelize-typescript";

@Table({ tableName: "tournaments" })
export class Tournaments extends Model {
  @AllowNull(false)
  @Column
  name!: string;
}
