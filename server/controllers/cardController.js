const { Card } = require("../models/models");
const { badRequest } = require("../error/ApiError");

class cardController {
  async create(req, res, next) {
    try {
      let { text, icon, translation, blockId } = req.body;

      const card = await Card.create({
        text,
        icon,
        translation,
        blockId: Number(blockId),
      });
      const response = {
        data: card
      };
      return res.status(200).json(response);
    } catch (e) {
      next(badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const cards = await Card.findAll({
      attributes: ["text", "icon", "translation", "id"],
    });
    if (cards.length === 0){
      return res.status(200).json({message: "No cards found"});
    } 
    const response = {
      data: cards
    };
    return res.status(200).json(response);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const card = await Card.findOne({
      where: {
        id,
      },
    });
    if (!card) {
      return res.status(404).json({ error: "Карточка не найдена" });
    }
    return res.status(200).json(card);
  }

  async getByBlock(req, res) {
    const { blockId } = req.params;
    const cards = await Card.findAll({
      where: {
        blockId,
      },
    });
    if (!cards) {
      return res.status(404).json({ error: "Карточки не найдены" });
    }
    return res.status(200).json(cards);
  }

  async deleteItem(req, res) {
    const { id } = req.params;
    const card = await Card.destroy({
      where: {
        id,
      },
    });
    return res.status(200).json(card);
  }

  async updateItem(req, res, next) {
    try {
      let { text, icon, translation, id } = req.body;

      const [updated] = await Card.update(
        {
          text,
          icon,
          translation,
        },
        {
          where: {
            id,
          },
        }
      );

      if (updated === 0) {
        return res.status(404).send({ error: "Карточка не найдена" });
      }

      return res.status(200).json(updated);
    } catch (e) {
      next(badRequest(e.message));
    }
  }
}

module.exports = new cardController();
