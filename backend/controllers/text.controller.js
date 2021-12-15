const textController = {};

textController.getInverted = (text) => {
  var inverted = {};
  inverted.text = text.split("").reverse().join("");
  inverted.palindrome = false;
  if (inverted.text === text) {
    inverted.palindrome = true;
  }
  return inverted;
};

textController.getInvertedText = (req, res) => {
  if (req.query.text) {
    // option 1
    const inverted = textController.getInverted(req.query.text);
    // option 2
    // let inverted = "";
    // for (let index = req.query.text.length - 1; index >= 0; index--) {
    //   inverted += req.query.text[index];
    // }

    res.setHeader("Content-Type", "application/json");

    return res
      .status(200)
      .send({ text: inverted.text, palindrome: inverted.palindrome });
  } else {
    return res.status(400).send({ error: "no text" });
  }
};

module.exports = textController;
