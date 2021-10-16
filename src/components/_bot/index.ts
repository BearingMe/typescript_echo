import { choice } from "../utils/random";
import { GREETINGS } from "./constants";
import { MetadataProtocol } from "../interfaces/metadata_protocol";

function template(msg: any): void {
  msg.reply(choice(GREETINGS));
}

export const bot: MetadataProtocol = {
  alias: /^!bot$/,
  trigger: "message",
  template: template,
};
