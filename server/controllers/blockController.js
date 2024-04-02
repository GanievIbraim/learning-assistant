const { Block } = require("../models/models");
const { badRequest } = require("../error/ApiError");

class blockController {
  async create(req, res, next) {
    try {
      let { description, icon, userId } = req.body;

      const block = await Block.create({
        description,
        icon,
        userId: Number(userId),
      });
      const response = {
        data: block
      };
      return res.status(200).json(response);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const blocks = await Block.findAll({
      attributes: ["description", "icon", "id"],
    });
    if (blocks.length === 0){
      return res.status(200).json({message: "No blocks found"});
    } 
    const response = {
        count: blocks.length,
        data: blocks.map(block => {
          return {
            description: block.description,
            icon: block.icon,
            id: block.id,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/block/" + block.id
            }
          }
        }),
    };
    return res.status(200).json(response);
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
    const response = {
      data: block
    };
    return res.status(200).json(response);
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    const block = await Block.destroy({
      where: {
        id,
      },
    });
    const response = {
      data: block
    };
    return res.status(200).json(response);
  }

  async getByUser(req, res) {
    const { userId } = req.params;
    const blocks = await Block.findAll({
      where: {
        userId,
      },
    });
    if (blocks.length === 0){
      return res.status(200).json({message: "No blocks created by this user found"});
    } 
    const response = {
      count: blocks.length,
      data: blocks,
  };
    return res.status(200).json(response);
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
      const response = {
        data: updated,
    };
      return res.status(200).json(response);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new blockController();
