const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
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

const Card = sequelize.define("Card", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  translation: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
});

const Block = sequelize.define("Block", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  icon: {
    type: DataTypes.STRING(200),
  },
});

// Связь между таблицами User и Block
User.hasMany(Block, { as: "blocks", foreignKey: "blockId" });
Block.belongsTo(User, { foreignKey: "userId" });

// связь между Block и Card
Block.hasMany(Card, { as: "cards", foreignKey: "cardId" });
Card.belongsTo(Block, { foreignKey: "blockId" });

module.exports = {
  User,
  Card,
  Block,
};
