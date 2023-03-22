const UserModel = require("../Model/User");
class ReturnData {
  giveSomeDataBack(req, res) {
    res.status(200).send({ message: "hi" });
  }

  async updatePassword(req, res) {
    const { email, oldPassword, newPassword } = req.body;
    try {
      let user = await UserModel.findOne({ email });
      if (!user) {
        res.status(400).send({ message: "Please provide valid data" });
        return;
      }

      if (user.password !== oldPassword) {
        res.status(400).send({ message: "Please provide valid data" });
        return;
      }

      user.password = newPassword;
      user = await user.save();
      res.status(200).send({ message: "updation done", user });
    } catch (error) {
      res.status(500).send({ message: "try again latter" });
    }
  }

  async deleteAccount(req, res) {
    const { email, password } = req.body;
    try {
      const deleteCountObj = await UserModel.deleteOne({ email, password });
      if (deleteCountObj.deletedCount != 1) {
        res.status(400).send({ message: "Please provide valid data" });
        return;
      }
      res.clearCookie("accessTokenCookie");
      res.status(200).send({ message: "Account Deleted", user: null });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "try again latter" });
    }
  }
}

module.exports = new ReturnData();
