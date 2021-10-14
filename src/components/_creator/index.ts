import { MetadataProtocol } from "../interfaces/metadata_protocol";
import { openTXT } from "../utils/file";

const creatorText: string = openTXT(__dirname, "creator.txt");

function template(msg: any): void {
  msg.reply(creatorText);
}

export const creator: MetadataProtocol = {
  alias: /^!creator$/,
  trigger: "message_create",
  template: template,
};
