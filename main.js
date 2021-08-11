const Bot = require("./core");

const exampleA = require("./components/ordinary/exampleA");
const exampleB = require("./components/ordinary/exampleB");
const exampleC = require("./components/ordinary/exampleC");
const exampleD = require("./components/ordinary/exampleD");

let bot = new Bot({
  components: [exampleA, exampleB, exampleC, exampleD],
});

bot.start();
