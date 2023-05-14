import "./loadEnviroment.js";
import createDebug from "debug";
import chalk from "chalk";
import mongoose from "mongoose";
import { app } from "./server/index.js";

const debug = createDebug("robots-api:root");

const port = process.env.PORT ?? 4000;
const mongoDbConnection = process.env.MONGODB_CONNECTION;

if (!mongoDbConnection) {
  debug(chalk.red(`Missign enviroment variables`));
  process.exit(1);
}

app.listen(port, () => {
  debug(chalk.blue(`Listening on http://localhost:${port}`));
});

try {
  await mongoose.connect(mongoDbConnection);
  debug("Conected to database");
} catch (error: unknown) {
  debug(`Error connecting data base: ${chalk.red((error as Error).message)}`);
}
