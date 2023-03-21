class ReturnData {
  giveSomeDataBack(req, res) {
    res.status(200).send({ message: "hi" });
  }
}

module.exports = new ReturnData();
