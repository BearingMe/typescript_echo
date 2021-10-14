import { Session } from "./auth";
import { metadata } from "./components";

const session = new Session();

const components = Object.values(metadata);

session.on("message_create", (msg) => {
  const text = msg.body as string;

  components
    .filter((c) => c.trigger == "message_create")
    .filter((c) => text.match(c.alias))
    .forEach((c) => c.template(msg));
});

session.start();
