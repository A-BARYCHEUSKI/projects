import * as Dotenv from 'dotenv';

const env = process.env;

export const AppConfig = {
  debug: env.DEBUG === "true",
}
