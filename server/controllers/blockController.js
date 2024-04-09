const { Block } = require("../models/models");
const { badRequest } = require("../error/ApiError");

class blockController {
  async create(req, res, next) {
    try {
      let { description, icon, userId, color, categoryId } = req.body;

      const block = await Block.create({
        description,
        icon,
        userId: Number(userId),
        color,
        categoryId: Number(categoryId),
      });
      const response = {
        data: block,
        request: {
          type: "GET",
          url: "http://localhost:3000/api/block/" + block.id,
        },
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
    if (blocks.length === 0) {
      return res.status(200).json({ message: "No blocks found" });
    }
    const response = {
      count: blocks.length,
      data: blocks.map((block) => {
        return {
          description: block.description,
          icon: block.icon,
          id: block.id,
          color: block.color,
          categoryId: block.categoryId,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/block/" + block.id,
          },
        };
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
      return res.status(404).json({ error: "Block not found" });
    }
    const response = {
      data: block,
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
      message: "Deleted. To get all blocks type this request",
      request: {
        type: "GET",
        url: "http://localhost:3000/api/block",
      },
      data: block,
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
    if (blocks.length === 0) {
      return res
        .status(200)
        .json({ message: "No blocks created by this user found" });
    }
    const response = {
      count: blocks.length,
      data: blocks.map((block) => {
        return {
          description: block.description,
          icon: block.icon,
          id: block.id,
          request: {
            type: "GET",
            url: "http://localhost:3000/api/block/" + block.id,
          },
        };
      }),
    };
    return res.status(200).json(response);
  }
  async getbyCategory(req, res) {
    try {
      const { categoryId } = req.params;
      const blocks = await Block.findAll({
        where: {
          categoryId,
        },
      });
      if (blocks.length === 0) {
        return res.status(200).json({ message: "No blocks found" });
      }
      const response = {
        count: blocks.length,
        data: blocks.map((block) => {
          return {
            description: block.description,
            icon: block.icon,
            id: block.id,
            request: {
              type: "GET",
              url: "http://localhost:3000/api/block/" + block.id,
            },
          };
        }),
      };
      return res.status(200).json(response);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async updateItem(req, res, next) {
    try {
      let { description, icon, userId, color, id, categoryId } = req.body;

      const [updated] = await Block.update(
        {
          description,
          icon,
          userId,
          color,
          categoryId,
        },
        {
          where: {
            id,
          },
        }
      );

      if (updated === 0) {
        return res.status(404).send({ error: "Block not found" });
      }
      const response = {
        data: updated,
        request: {
          type: "GET",
          url: "http://localhost:3000/api/block/" + id,
        },
      };
      return res.status(200).json(response);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new blockController();
