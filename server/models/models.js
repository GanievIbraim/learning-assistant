import { define } from "../db";
import { DataTypes } from "sequelize";

const User = define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  refreshToken: {
    type: DataTypes.STRING(250),
  },
  phone_number: {
    type: DataTypes.STRING(45),
  },
  address: {
    type: DataTypes.STRING(45),
  },
});

const ProductCategory = define("Product_Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
});

// Связь между таблицами User и Order
User.hasMany(Order, { as: "orders", foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

export default {
  User,
};
