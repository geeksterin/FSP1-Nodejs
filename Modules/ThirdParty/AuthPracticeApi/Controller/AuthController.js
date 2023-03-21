const jwt = require("jsonwebtoken");
const UserModel = require("../Model/User");
class Auth {
  async signUpTheUser(req, res) {
    const { name, email, password } = req.body;
    try {
      const newlyCreatedUser = await UserModel.create({
        name,
        email,
        password,
      });
      res.status(200).send({ message: "Signed up done" });
      return;
    } catch (error) {
      res
        .status(500)
        .send({ message: "Server failed to Signup,try again latter" });
    }
    return;
  }

  async signInTheUser(req, res) {
    const { email } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      const accessToken = jwt.sign({ _id: user._id }, "salt", {
        expiresIn: "24h",
      });

      res.cookie("accessTokenCookie", accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      res.status(200).send({ message: "signin done", user });
      return;
    } catch (error) {
      res.status(500).send({ message: "try again latter" });
      return;
    }
  }

  logoutTheUser(req, res) {
    res.clearCookie("accessTokenCookie");
    res.status(200).send({ message: "logout done", user: null });
  }
}

module.exports = new Auth();

//to create storng salts => require("crypto").randomBytes(32).toString("hex") in the node repl
