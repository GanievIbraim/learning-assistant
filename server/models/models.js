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
  color: {
    type: DataTypes.STRING(200),
  },
});

const Group = sequelize.define("Group", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Users",
      key: "id",
    },
  },
});

// Определение модели Category
const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  icon: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Schedule = sequelize.define("Schedule", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  dayOfWeek: {
    type: DataTypes.ENUM(
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ),
    allowNull: false,
  },
});

Block.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Block, { as: "blocks", foreignKey: "categoryId" });

// Связь между таблицами User и Block
User.hasMany(Block, { as: "blocks", foreignKey: "userId" });
Block.belongsTo(User, { foreignKey: "userId" });

// Связь многие ко многим между User и Group
User.belongsToMany(Group, { through: "UserGroups", as: "groups" });
Group.belongsToMany(User, { through: "UserGroups", as: "users" });

Group.belongsTo(User, { as: "owner", foreignKey: "ownerId" });
User.hasMany(Group, { as: "ownedGroups", foreignKey: "ownerId" });

// связь между Block и Card
Block.hasMany(Card, { as: "cards", foreignKey: "blockId" });
Card.belongsTo(Block, { foreignKey: "blockId" });

module.exports = {
  User,
  Card,
  Block,
  Group,
  Schedule,
  Category,
};
