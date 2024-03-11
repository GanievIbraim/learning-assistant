import { Sequelize } from "sequelize";

export default new Sequelize(
  "lAssistent", // Название базы данных
  "root", // Пользователь базы данных
  "Wersia1797", // Пароль от БД
  {
    host: "localhost",
    dialect: "mysql",
  }
);
