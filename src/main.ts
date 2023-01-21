import { Whatsapp, Message } from 'venom-bot';

import { metadata } from './components';

const components = Object.values(metadata);

async function anyMessageHandler(this: Whatsapp, message: Message) {
  const text = message.body;

  console.log(`Received message: ${text} from ${message.sender}`);
  
  components
    .filter(c => text.match(c.alias))
    .forEach(c => c.template(this));
}

export {
  anyMessageHandler,
};
