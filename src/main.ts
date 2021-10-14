import { Session } from "./auth";
import { Matcher } from "./filters";
import { metadata } from "./components";

const session = new Session();

const components = Object.values(metadata);

session.on("message_create", (msg) => {
  const matcher = new Matcher(msg);

  components
    .filter((c) => c.trigger == "message_create")
    .filter((c) => matcher.alias(c.alias))
    .forEach((c) => c.template(msg));
});

session.start();
