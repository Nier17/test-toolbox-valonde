const assert = require("chai").assert;
const textController = require("../controllers/text.controller");
// import "isomorphic-fetch";

// describe("textController", function () {
//   console.log("asads");
//   // var myBlob = new Blob();
//   // var init = { status: 200, statusText: "SuperSmashingGreat!" };
//   // var myResponse = new Response(myBlob, init);
//   var res = new Response();

//   console.log(res);
//   it("app should return hello", function () {
//     assert.equal(
//       textController.getInvertedText({ query: { text: "hola" } }, res),
//       "aloh"
//     );
//   });
// });

describe("getInverted", function () {
  it("should return inverted", function () {
    assert.deepEqual(textController.getInverted("hola"), {
      text: "aloh",
      palindrome: false,
    });
  });
});
