const { Category } = require('../models/models');

class CategoryController {
  static async getAll(req, res) {
    try {
      const categories = await Category.findAll();
      res.status(200).json({ data: categories });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json({ data: category });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { name, icon } = req.body;
      if (!name || !icon) {
        return res.status(400).json({ error: 'Name and icon are required' });
      }
      const newCategory = await Category.create({ name, icon });
      res.status(201).json({ data: newCategory });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateItem(req, res) {
    try {
      const { id } = req.params;
      const { name, icon } = req.body;
      const updated = await Category.update({ name, icon }, { where: { id } });
      if (!updated[0]) {
        return res.status(404).json({ error: 'Category not found' });
      }
      const updatedCategory = await Category.findByPk(id);
      res.status(200).json({ data: updatedCategory });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteItem(req, res) {
    try {
      const { id } = req.params;
      const deleted = await Category.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: 'Category not found' });
      }
      res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CategoryController;
