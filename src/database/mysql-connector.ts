import { Sequelize } from "sequelize-typescript";
import { Matches, Teams, Tournaments } from "./models";

const DATA_SOURCES = {
  mySqlDataSource: {
    DB_HOST: process.env.MYSQL_HOST,
    DB_USER: process.env.MYSQL_USERNAME,
    DB_PASSWORD: process.env.MYSQL_PASSWORD,
    DB_DATABASE: process.env.MY_SQL_DATABASE,
    DB_CONNECTION_LIMIT: 4
  }
};

export const sequelizeConnection = new Sequelize(
  DATA_SOURCES.mySqlDataSource.DB_DATABASE!,
  DATA_SOURCES.mySqlDataSource.DB_USER!,
  DATA_SOURCES.mySqlDataSource.DB_PASSWORD,
  {
    host: DATA_SOURCES.mySqlDataSource.DB_HOST,
    dialect: "mysql",
    models: [Teams, Tournaments, Matches]
  }
);

export const dbInit = () =>
  Promise.all([Teams.sync(), Tournaments.sync(), Matches.sync()]);
