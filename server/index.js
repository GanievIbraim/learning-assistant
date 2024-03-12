const express = require("express");
const sequelize = require("./db");
const models = require("./models/models");
const router = require("./routes/index");
const cors = require("cors");
const cokieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cokieParser());
app.use(express.json());
app.use(cors());
app.use("/api", router);

const start = async () => {
  try {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Подключение к базе произошло успешно");
      })
      .catch((error) => {
        console.error("Ошибка при при подключении к таблицам: ", error);
      });

    sequelize
      .sync()
      .then(() => {
        console.log("Таблицы созданы успешно.");
      })
      .catch((error) => {
        console.error("Ошибка при создании таблиц: ", error);
      });

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
