const Bot = require("./core");

// on message
const autoban = require('./components/message/admin_autoban') // funcionando | em desenvolvimento

// on message create
const about = require("./components/message_create/default_about"); // completo
const counter = require('./components/message_create/default_counter') // completo

let bot = new Bot({
  components: [about, autoban, counter],
});

bot.start();
