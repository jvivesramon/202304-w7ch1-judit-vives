import "./loadEnviroment.js";
import createDebug from "debug";
import chalk from "chalk";
import { app } from "./server/index.js";

const debug = createDebug("robots-api:root");

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  debug(chalk.blue(`Listening on http://localhost:${port}`));
});
