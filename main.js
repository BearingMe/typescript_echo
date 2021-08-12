const Bot = require("./core");

const about = require("./components/default_about");

let bot = new Bot({
  components: [about],
});

bot.start();
