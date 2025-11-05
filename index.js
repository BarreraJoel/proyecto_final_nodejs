import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import appConfig from "./src/config/app.config.js";
import corsConfig from "./src/config/cors.config.js ";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/api", router);

const startServer = async () => {
  app.listen(appConfig.port, () => {
    console.log(`🚀 Servidor escuchando en puerto: ${appConfig.port}`);
  });
};

startServer().catch((error) => {
  console.error("❌ Error al iniciar el servidor: ", error);
  process.exit(1);
});
