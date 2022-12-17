import * as dotenv from "dotenv";
dotenv.config();

import express, { Application } from "express";
import routes from "./api/routes";
import * as MYSQL from "./database/mysql-connector";

// With sync({ force: true }), database tables will be dropped and rebuilt each run of the application
// MYSQL.sequelizeConnection.sync({ force: true });
MYSQL.sequelizeConnection.sync();

const app: Application = express();
const port = parseInt(process.env.API_PORT ?? "3000");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", routes);

try {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`);
}

export default app;
