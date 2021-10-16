import { Session } from "./auth";
import { Matcher } from "./helpers/filters";
import { ArrayHandler } from "./helpers/handlers";
import { metadata } from "./components";
import { MetadataProtocol } from "./components/interfaces/metadata_protocol";

const session = new Session();

const metadataArray = Object.values(metadata);
const components = new ArrayHandler(metadataArray);

session.on("message_create", async (msg) => {
  const matcher = new Matcher(msg);

  const results: Array<MetadataProtocol> = await components
    .filter(async (c) => c.trigger == "message_create")
    .filter(async (c) => matcher.alias(c.alias))
    .filter(async (c) => matcher.scope(c.scope))
    .resolve();

  results.forEach((c) => c.template(msg));
});

session.start();
