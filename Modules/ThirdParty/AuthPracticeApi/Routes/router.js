const router = require("express").Router();
const DataCheck = require("../Middleware/checkIfAllDataIsPresent");
const AuthController = require("../Controller/AuthController");
const ReturnData = require("../Controller/Controller");

router.post(
  "/signup",
  DataCheck.checkIfAllDataIsPresent,
  DataCheck.checkIfEmailIsAlreadyPresent,
  AuthController.signUpTheUser
);

router.post(
  "/signin",
  DataCheck.checkIfAllDataIsPresent,
  DataCheck.checkIfEmailAndPasswordIsValid,
  AuthController.signInTheUser
);
router.get(
  "/logout",
  DataCheck.checkIfAccessTokenIsValid,
  AuthController.logoutTheUser
);

router.get(
  "/",
  DataCheck.checkIfAccessTokenIsValid,
  ReturnData.giveSomeDataBack
);

router.post(
  "/update",
  DataCheck.checkIfAccessTokenIsValid,
  DataCheck.checkIfOldAndNewPasswordPresent,
  ReturnData.updatePassword
);
router.post(
  "/delete",
  DataCheck.checkIfAccessTokenIsValid,
  DataCheck.checkIFEmailAndPasswordArePresent,
  ReturnData.deleteAccount
);

module.exports = router;
