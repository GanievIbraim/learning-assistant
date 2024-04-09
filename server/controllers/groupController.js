const { Group, User } = require("../models/models");
const { badRequest } = "../error/ApiError";

class groupController {
  static async create(req, res) {
    // try {
      const ownerId = Number(req.body.ownerId);
      const name = req.body.name;
      console.log({ name, ownerId });
      if (!name) {
        return res.status(400).json({ error: "Name is required" });
      }
      const newGroup = await Group.create({ name, ownerId });
      return res.status(201).json({ data: newGroup });
    // } catch (error) {
    //   return res.status(500).json({ error: "Internal server error" });
    // }
  }

  static async getAll(req, res) {
    try {
      const groups = await Group.findAll();
      return res.status(200).json({ data: groups });
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const group = await Group.findByPk(id);
      return group
        ? res.status(200).json({ data: group })
        : res.status(404).json({ error: "Group not found" });
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  static async deleteItem(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Group.destroy({ where: { id } });
      return deleted
        ? res.status(200).json({ message: "Group deleted" })
        : res.status(404).json({ error: "Group not found" });
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  static async updateItem(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Group.update(req.body, { where: { id } });
      return updated
        ? res.status(200).json({ message: "Group updated" })
        : res.status(404).json({ error: "Group not found" });
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  static async getUsers(req, res) {
    try {
      console.log("getUsers");
      const { id } = req.params;
      const group = await Group.findByPk(id, {
        include: { model: User, as: "users" },
      });
      return group
        ? res.status(200).json({ data: group.users })
        : res.status(404).json({ error: "Group not found" });
    } catch (e) {
      next(badRequest(e.message));
    }
  }
  static async addUserToGroup(req, res) {
    try {
      console.log("addUserToGroup");

      const { userId, groupId } = req.body;
      if (!userId || !groupId) {
        return res
          .status(400)
          .json({ error: "UserId and GroupId are required" });
      }

      // Поиск пользователя и группы, чтобы убедиться, что они существуют
      const user = await User.findByPk(userId);
      const group = await Group.findByPk(groupId);

      if (!user || !group) {
        return res.status(404).json({ error: "User or Group not found" });
      }

      // Добавление пользователя в группу
      await group.addUser(user);

      return res
        .status(200)
        .json({ message: `User ${userId} added to Group ${groupId}` });
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  static async removeUserFromGroup(req, res) {
    try {
      const { userId, groupId } = req.body;
      if (!userId || !groupId) {
        return res
          .status(400)
          .json({ error: "UserId and GroupId are required" });
      }

      // Поиск пользователя и группы, чтобы убедиться, что они существуют
      const user = await User.findByPk(userId);
      const group = await Group.findByPk(groupId);

      if (!user || !group) {
        return res.status(404).json({ error: "User or Group not found" });
      }

      // Удаление пользователя из группы
      await group.removeUser(user);

      return res
        .status(200)
        .json({ message: `User ${userId} removed from Group ${groupId}` });
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = groupController;
