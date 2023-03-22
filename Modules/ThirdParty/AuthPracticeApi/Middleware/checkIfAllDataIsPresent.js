const UserModel = require("../Model/User");
const jwt = require("jsonwebtoken");
class DataCheck {
  checkIfAllDataIsPresent(req, res, next) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).send({ message: "Please provide all data" });
      return;
    }

    next();
  }
  async checkIfEmailIsAlreadyPresent(req, res, next) {
    const { email } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        res
          .status(400)
          .send({ message: "Email is already in use with another user" });
        return;
      }
      next();
    } catch (error) {
      res
        .status(500)
        .send({ message: "Server failed to Signup,try again latter" });
    }
    return;
  }

  async checkIfEmailAndPasswordIsValid(req, res, next) {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (!user) {
        res.status(400).send({ message: "Email is not registered" });
        return;
      }

      if (user.password === password) {
        next();
      } else {
        res.status(400).send({ message: "Wrong email of password" });
        return;
      }
    } catch (error) {
      res.status(500).send({ message: "signin failed,try latter" });
      return;
    }
  }

  checkIfAccessTokenIsValid(req, res, next) {
    const { accessTokenCookie } = req.cookies;
    if (!accessTokenCookie) {
      res.status(400).send({ message: "You are not signin" });
      return;
    }

    const payload = jwt.verify(accessTokenCookie, "salt");
    if (!payload) {
      res.status(400).send({ message: "You are not signin" });
      return;
    }

    next();
  }

  checkIfOldAndNewPasswordPresent(req, res, next) {
    const { email, oldPassword, newPassword } = req.body;
    if (!email || !oldPassword || !newPassword) {
      res.status(400).send({ message: "Provide all the data" });
      return;
    }
    next();
  }

  checkIFEmailAndPasswordArePresent(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({ message: "Provide all the data" });
      return;
    }

    next();
  }
}

module.exports = new DataCheck();
