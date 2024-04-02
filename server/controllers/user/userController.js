const { User } = require("../../models/models");

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
        console.log(`User ID ${id} has been succesfuly deleted.`);
        const response = {
          message: "User deleted successfully",
          data: result,
        };
        return res.status(200).json(response);
      } else {
        console.log(`User ID ${id} not found.`);
        return res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("User deletion error", error);
      return res.status(500).json({ error: "User deletion error" });
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

      if (!foundUser) return res.status(404).json({ error: "User not found" });

      for (var param in userData) {
        if (userData[param] == false) {
          foundUser[param] = "-";
        } else foundUser[param] = userData[param];
      }

      foundUser.save();
      const response = {
        data: foundUser,
      };
      return res.status(200).json(response);
    } catch (err) {
      res.status(500).send({
        error: err,
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
          error: "User not found",
        });

      const { password, refreshToken, createdAt, updatedAt, ...userData } =
        foundUser.dataValues;
      const response = {
        data: userData
      }
      return res.json(response);
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  }
}

module.exports = new UserController();
