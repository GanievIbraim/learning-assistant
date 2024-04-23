const { User, Group } = require("../../models/models");
const { badRequest } = "../error/ApiError";

class UserController {
  async deleteUserById(req, res) {
    const id = req.body.id;
    try {
      const result = await User.destroy({
        where: {
          id: Number(id),
        },
      });
      if (result) {
        console.log(`Пользователь с ID ${id} успешно удален.`);
        res.json(result);
      } else {
        console.log(`Пользователь с ID ${id} не найден.`);
        res.json(result);
      }
    } catch (error) {
      console.error("Произошла ошибка при удалении пользователя:", error);
    }
  }
  async update(req, res) {
    try {
      const userId = req.user.id;
      const userData = req.body;

      const foundUser = await User.findOne({
        where: {
          id: userId,
        },
      });

      if (!foundUser)
        return res.status(404).json({
          message: "Пользователь не найден",
        });

      for (var param in userData) {
        if (userData[param] == false) {
          foundUser[param] = "-";
        } else foundUser[param] = userData[param];
      }

      foundUser.save();

      return res.json(foundUser);
    } catch (err) {
      res.status(404).send({
        message: err,
      });
    }
  }

  async getProfile(req, res) {
    try {
      const userId = req.user.id;

      const foundUser = await User.findOne({
        where: {
          id: userId,
        },
      });

      if (!foundUser)
        return res.status(404).json({
          message: "Пользователь не найден",
        });

      const { password, refreshToken, createdAt, updatedAt, ...userData } =
        foundUser.dataValues;
      return res.json(userData);
    } catch (err) {
      res.status(404).send({
        message: err,
      });
    }
  }

  async getUserGroups(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        include: { model: Group, as: "groups" },
      });
      return user
        ? res.status(200).json({ data: user.groups })
        : res.status(404).json({ error: "User not found" });
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new UserController();
