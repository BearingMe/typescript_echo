import { MetadataProtocol } from "../interfaces/metadata_protocol";

let accumulator = 0;

function template(msg: any): void {
  accumulator++;

  msg.reply(accumulator.toString());
}

export const count: MetadataProtocol = {
  alias: /^!count$/,
  trigger: "message_create",
  template: template,
};
