const { Block } = require("../models/models");
const { badRequest } = "../error/ApiError";

class blockController {
  async create(req, res, next) {
    try {
      let { description, icon, userId } = req.body;

      const block = await Block.create({
        description,
        icon,
        userId: Number(userId),
      });

      return res.json(block);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const blocks = await Block.findAll({
      attributes: ["description", "icon", "id"],
    });
    return res.json(blocks);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const block = await Block.findOne({
      where: {
        id,
      },
    });
    if (!block) {
      return res.status(404).json({ error: "Блок не найден" });
    }
    return res.json(block);
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    const block = await Block.destroy({
      where: {
        id,
      },
    });
    return res.json(block);
  }

  async getByUser(req, res) {
    const { userId } = req.params;
    const blocks = await Block.findAll({
      where: {
        userId,
      },
    });
    return res.json(blocks);
  }

  async updateItem(req, res, next) {
    try {
      let { description, icon, userId, id } = req.body;

      const [updated] = await Block.update(
        {
          description,
          icon,
          userId,
        },
        {
          where: {
            id,
          },
        }
      );

      if (updated === 0) {
        return res.status(404).send({ error: "Блок не найден" });
      }

      return res.json(updated);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new blockController();
