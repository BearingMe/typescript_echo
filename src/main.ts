import * as venom from 'venom-bot';

async function start(_: any) {
  console.log('Bot started');
}    

const options = {
  session: 'echo',
}

venom
  .create(options)
  .then(client => start(client))
  .catch(error => console.log(error));