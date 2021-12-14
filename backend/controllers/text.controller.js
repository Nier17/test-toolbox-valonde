const textController = {}

textController.getInvertedText = (req, res) => {
  if (req.query.text) {
    // option 1
    const inverted = req.query.text.split('').reverse().join('')
    let palindrome = false
    if (inverted === req.query.text) {
      palindrome = true
    }
    // option 2
    // let inverted = "";
    // for (let index = req.query.text.length - 1; index >= 0; index--) {
    //   inverted += req.query.text[index];
    // }

    res.setHeader('Content-Type', 'application/json')

    return res.status(200).send({ text: inverted, palindrome: palindrome })
  } else {
    return res.status(400).send({ error: 'no text' })
  }
}

module.exports = textController
