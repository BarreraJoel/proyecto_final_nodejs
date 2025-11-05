import { env } from "process";

export default {
  port: env.APP_PORT ?? 3000,
};
