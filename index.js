import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/routes/index.js";
import appConfig from "./src/config/app.config.js";
import corsConfig from "./src/config/cors.config.js ";
import notFound from "./src/middlewares/not-found.middleware.js";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/api", router);
app.use(notFound);

const startServer = async () => {
  app.listen(appConfig.port, () => {
    console.log(`🚀 Servidor escuchando en puerto: ${appConfig.port}`);
  });
};

startServer().catch((error) => {
  console.error("❌ Error al iniciar el servidor: ", error);
  process.exit(1);
});
